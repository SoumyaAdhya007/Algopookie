import { db } from "../libs/db.js";
import {
  getLanguageName,
  pollBatchResults,
  submissionBatch,
} from "../libs/judge0.libs.js";

export const executeCode = async (req, res) => {
  const { source_code, language_id, stdin, expected_outputs } = req.body;
  try {
    if (
      !Array.isArray(stdin) ||
      stdin.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdin.length
    ) {
      return res.status(400).json({
        error: "Invalid or missing test cases",
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
    console.error("Error while executing source code", error);
    res.status(500).json({
      error: "Error while executing source code",
    });
  }
};

export const submitCode = async (req, res) => {
  const { source_code, language_id, stdin, expected_outputs, problemId } =
    req.body;
  const userId = req.user.id;
  try {
    if (
      !Array.isArray(stdin) ||
      stdin.length === 0 ||
      !Array.isArray(expected_outputs) ||
      expected_outputs.length !== stdin.length
    ) {
      return res.status(400).json({
        error: "Invalid or missing test cases",
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
        status: allPassed ? "Accepted" : "Wrong Answer",
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

    res.status(200).json({
      success: true,
      message: "Code executed! Successfully",
      submission: submissionWithTestCase,
    });
  } catch (error) {
    console.error("Error while executing source code", error);
    res.status(500).json({
      error: "Error while executing source code",
    });
  }
};