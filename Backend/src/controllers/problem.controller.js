import { db } from "../libs/db.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judge0.libs.js";

export const createProblem = async (req, res) => {
  // going to get all the data from the request body
  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    hints,
    editorials,
    testcases,
    codeSnippets,
    referenceSolutions,
  } = req.body;
  // going to check the user role once again
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      error: "You are not allowed to create a problem",
    });
  }
  try {
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
          examples,
          constraints,
          editorials,
          testcases,
          codeSnippets,
          referenceSolutions,
          userId: req.user.id,
        },
      });
      return res.status(201).json(newProblem);
    }
  } catch (error) {
    console.error("Error creating new problem:", error);
    res.status(500).json({
      error: "Error creating new problem",
    });
  }
};

export const getAllProblems = async (req, res) => {};

export const getProblemById = async (req, res) => {};

export const updateProblem = async (req, res) => {};

export const deleteProblem = async (req, res) => {};

export const getAllSolvedProblemsByUser = async (req, res) => {};
