import { db } from "../libs/db.js";
import {
  getLanguageName,
  pollBatchResults,
  submissionBatch,
} from "../libs/judge0.libs.js";
import { userIdSchema } from "../validators/auth.validators.js";
import {
  executeCodeSchema,
  submitCodeSchema,
} from "../validators/executeCode.validators.js";
import { formatZodError } from "../validators/formatZodError.js";

export const executeCode = async (req, res) => {
  try {
    const { source_code, language_id, stdin, expected_outputs, problemId } =
      executeCodeSchema.parse(req.body);
    const userId = userIdSchema.parse(req.user).id;

    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    const submissionsCount = await db.submission.findMany({
      where: {
        userId,
        problemId,
      },
    });

    if (submissionsCount.length >= 3 && user.plan === "FREE") {
      return res.status(429).json({
        error:
          "You've hit your 3 submission limit. Run and submit are disabled on the free plan.",
      });
    }

    const submissions = stdin.map((input) => ({
      source_code,
      language_id,
      stdin: input,
    }));

    const submitResponse = await submissionBatch(submissions);
    const tokens = submitResponse.map((res) => res.token);
    const results = await pollBatchResults(tokens);

    let allPassed = true;
    const detailedResults = results.map((result, i) => {
      const stdout = result.stdout?.trim();
      const expected_output = expected_outputs[i]?.trim();
      const passed = stdout === expected_output;

      if (!passed) allPassed = false;
      return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr || null,
        compileOutput: result.compile_output || null,
        status: result.status.description,
        memory: result.memory ? `${result.memory} KB` : undefined,
        time: result.time ? `${result.time} s` : undefined,
      };
    });

    const testCaseResults = detailedResults.map((r, i) => ({
      testCase: r.testCase,
      passed: r.passed,
      stdout: r.stdout,
      expected: r.expected,
      stderr: r.stderr,
      compileOutput: r.compile_output,
      status: r.status,
      memory: r.memory,
      time: r.time,
    }));
    const submissionWithTestCase = {
      stdin: stdin.join("\n"),
      stdout: JSON.stringify(detailedResults.map((r) => r.stdout)),
      stderr: detailedResults.some((r) => r.stderr)
        ? JSON.stringify(detailedResults.map((r) => r.stderr))
        : null,
      compileOutput: detailedResults.some((r) => r.compile_output)
        ? JSON.stringify(detailedResults.map((r) => r.compile_output))
        : null,
      status: allPassed ? "Accepted" : "Wrong Answer",
      memory: detailedResults.some((r) => r.memory)
        ? JSON.stringify(detailedResults.map((r) => r.memory))
        : null,
      time: detailedResults.some((r) => r.time)
        ? JSON.stringify(detailedResults.map((r) => r.time))
        : null,
      testCases: testCaseResults,
    };

    res.status(200).json({
      success: true,
      message: "Code executed! Successfully",
      submission: submissionWithTestCase,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while executing source code", error);
    res.status(500).json({
      error: "Error while executing source code",
    });
  }
};

export const submitCode = async (req, res) => {
  try {
    const { source_code, language_id, stdin, expected_outputs, problemId } =
      submitCodeSchema.parse(req.body);
    const userId = userIdSchema.parse(req.user).id;

    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    const submissionsCount = await db.submission.findMany({
      where: {
        userId,
        problemId,
      },
    });

    if (submissionsCount.length >= 3 && user.plan === "FREE") {
      return res.status(429).json({
        error:
          "You've hit your 3 submission limit. Run and submit are disabled on the free plan.",
      });
    }

    const submissions = stdin.map((input) => ({
      source_code,
      language_id,
      stdin: input,
    }));

    const submitResponse = await submissionBatch(submissions);
    const tokens = submitResponse.map((res) => res.token);
    const results = await pollBatchResults(tokens);

    let allPassed = true;
    let timeLimitExceeded = 0;
    const detailedResults = results.map((result, i) => {
      const stdout = result.stdout?.trim();
      const expected_output = expected_outputs[i]?.trim();
      const passed = stdout === expected_output;
      if (result.status.description === "Time Limit Exceeded")
        timeLimitExceeded++;
      if (!passed) allPassed = false;
      return {
        testCase: i + 1,
        passed,
        stdout,
        expected: expected_output,
        stderr: result.stderr || null,
        compileOutput: result.compile_output || null,
        status: result.status.description,
        memory: result.memory ? `${result.memory} KB` : undefined,
        time: result.time ? `${result.time} s` : undefined,
      };
    });

    const submission = await db.submission.create({
      data: {
        userId,
        problemId,
        sourceCode: source_code,
        language: getLanguageName(language_id),
        stdin: stdin.join("\n"),
        stdout: JSON.stringify(detailedResults.map((r) => r.stdout)),
        stderr: detailedResults.some((r) => r.stderr)
          ? JSON.stringify(detailedResults.map((r) => r.stderr))
          : null,
        compileOutput: detailedResults.some((r) => r.compile_output)
          ? JSON.stringify(detailedResults.map((r) => r.compile_output))
          : null,
        status: allPassed
          ? "Accepted"
          : timeLimitExceeded > 0
          ? "Time Limit Exceeded"
          : "Wrong Answer",
        memory: detailedResults.some((r) => r.memory)
          ? JSON.stringify(detailedResults.map((r) => r.memory))
          : null,
        time: detailedResults.some((r) => r.time)
          ? JSON.stringify(detailedResults.map((r) => r.time))
          : null,
      },
    });

    if (allPassed) {
      await db.problemSolved.upsert({
        where: {
          userId_problemId: {
            userId,
            problemId,
          },
        },
        update: {},
        create: {
          userId,
          problemId,
        },
      });
    }

    const testCaseResults = detailedResults.map((r) => ({
      submissionId: submission.id,
      testCase: r.testCase,
      passed: r.passed,
      stdout: r.stdout,
      expected: r.expected,
      stderr: r.stderr,
      compileOutput: r.compile_output,
      status: r.status,
      memory: r.memory,
      time: r.time,
    }));

    await db.TestCaseResult.createMany({
      data: testCaseResults,
    });

    const submissionWithTestCase = await db.submission.findUnique({
      where: {
        id: submission.id,
      },
      include: {
        testCases: true,
      },
    });

    const now = new Date();
    const utcYear = now.getUTCFullYear();
    const utcMonth = now.getUTCMonth();
    const utcDay = now.getUTCDate();
    const midnightUTC = new Date(
      Date.UTC(utcYear, utcMonth, utcDay, 0, 0, 0, 0)
    );
    await db.userDailyActivity.upsert({
      where: {
        userId_date: {
          userId: userId,
          date: midnightUTC,
        },
      },
      update: {},
      create: {
        userId: userId,
        date: midnightUTC,
      },
    });

    res.status(200).json({
      success: true,
      message: "Code executed! Successfully",
      submission: submissionWithTestCase,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while executing source code", error);
    res.status(500).json({
      error: "Error while executing source code",
    });
  }
};
