import { db } from "../libs/db.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judge0.libs.js";
import { userIdSchema } from "../validators/auth.validators.js";
import { formatZodError } from "../validators/formatZodError.js";
import { problemSchema } from "../validators/problem.validators.js";

export const createProblem = async (req, res) => {
  try {
    // going to get all the data from the request body
    const {
      title,
      description,
      difficulty,
      tags,
      companies,
      examples,
      constraints,
      hints,
      editorials,
      testcases,
      codeSnippets,
      referenceSolutions,
    } = problemSchema.parse(req.body);

    // going to check the user role once again
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({
        error: "You are not allowed to create a problem",
      });
    }
    // loop through each reference solutions for different languages
    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);
      if (!languageId) {
        return res
          .status(400)
          .json({ error: `Language ${language} is not supported` });
      }
      const submissions = testcases.map(({ input, output }) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));
      const submissionResult = await submissionBatch(submissions);

      const tokens = submissionResult.map((r) => r.token);

      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${language}`,
          });
        }
      }

      // save the problem to the database
      const newProblem = await db.problem.create({
        data: {
          title,
          description,
          difficulty,
          tags,
          companies,
          examples,
          constraints,
          hints,
          editorials,
          testcases,
          codeSnippets,
          referenceSolutions,
          userId: req.user.id,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Problem Created Successfully",
        problem: newProblem,
      });
    }
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error creating new problem:", error);
    res.status(500).json({
      error: "Error creating new problem",
    });
  }
};

export const getAllProblems = async (req, res) => {
  try {
    const problems = await db.problem.findMany({
      include: {
        solvedBy: {
          where: {
            userId: req.user.id,
          },
        },
      },
    });

    if (!problems) {
      return res.status(404).json({
        error: "No problems found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problem fetched Successfully",
      problems,
    });
  } catch (error) {
    console.error("Error while fetching problems:", error);
    res.status(500).json({
      error: "Error while fetching problems",
    });
  }
};

export const getProblemById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Problem ID is required." });
    }

    const problem = await db.problem.findUnique({
      where: {
        id,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Problem fetched Successfully",
      problem,
    });
  } catch (error) {
    console.error("Error while fetching problem by id", error);
    res.status(500).json({
      error: "Error while fetching problem by id",
    });
  }
};

export const updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      difficulty,
      tags,
      companies,
      examples,
      constraints,
      hints,
      editorials,
      testcases,
      codeSnippets,
      referenceSolutions,
    } = problemSchema.parse(req.body);

    if (!id) {
      return res.status(400).json({ error: "Problem ID is required." });
    }

    const problem = await db.problem.findUnique({
      where: {
        id,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    for (const [language, solutionCode] of Object.entries(referenceSolutions)) {
      const languageId = getJudge0LanguageId(language);

      if (!languageId) {
        return res
          .status(400)
          .json({ error: `Language ${language} is not supported` });
      }

      const submissions = testcases.map(({ input, output }) => ({
        source_code: solutionCode,
        language_id: languageId,
        stdin: input,
        expected_output: output,
      }));

      const submissionResult = await submissionBatch(submissions);

      const tokens = submissionResult.map((r) => r.token);

      const results = await pollBatchResults(tokens);

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.status.id !== 3) {
          return res.status(400).json({
            error: `Testcase ${i + 1} failed for language ${language}`,
          });
        }
      }

      const updateProblem = await db.problem.update({
        where: {
          id,
        },
        data: {
          title,
          description,
          difficulty,
          tags,
          companies,
          examples,
          constraints,
          hints,
          editorials,
          testcases,
          codeSnippets,
          referenceSolutions,
          userId: req.user.id,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Problem Created Successfully",
        problem: updateProblem,
      });
    }
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while updating problem", error);
    res.status(500).json({
      error: "Error while updating problem",
    });
  }
};

export const deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Problem ID is required." });
    }

    const problem = await db.problem.findUnique({
      where: {
        id,
      },
    });

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    await db.problem.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      message: "Problem deleted successfully",
    });
  } catch (error) {
    console.error("Error while deleting problem", error);
    res.status(500).json({
      error: "Error while deleting problem",
    });
  }
};

export const getAllSolvedProblemsByUser = async (req, res) => {
  try {
    const userId = userIdSchema.parse(req.user).id;

    const problems = await db.problem.findMany({
      where: {
        solvedBy: {
          some: {
            userId,
          },
        },
      },
      include: {
        solvedBy: {
          where: {
            userId,
          },
        },
      },
    });

    res.status(200).json({
      success: true,
      message: "Problems fetched successfully",
      problems,
    });
  } catch (error) {
    const validationErrors = formatZodError(error);
    if (validationErrors) {
      return res.status(400).json({ error: validationErrors });
    }

    console.error("Error while fetching solved problems", error);
    res.status(500).json({
      error: "Error while fetching solved problems",
    });
  }
};
