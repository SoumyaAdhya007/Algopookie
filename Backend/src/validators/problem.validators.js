import { z } from "zod";

const exampleEntrySchema = z.object({
  input: z.string().min(1, { message: "Example input is required" }),
  output: z.string().min(1, { message: "Example output is required" }),
  explanation: z
    .string()
    .min(1, { message: "Example explanation is required" }),
});

const examplesSchema = z
  .record(exampleEntrySchema)
  .refine((obj) => Object.keys(obj).length > 0, {
    message: "At least one example is required",
  });

const testCaseSchema = z.object({
  input: z.string().min(1, { message: "Testcase input is required" }),
  output: z.string().min(1, { message: "Testcase output is required" }),
});

const testcasesSchema = z
  .array(testCaseSchema)
  .nonempty({ message: "At least one testcase is required" });

const codeSnippetsSchema = z
  .record(z.string().min(1, { message: "Snippet code cannot be empty" }))
  .refine((obj) => Object.keys(obj).length > 0, {
    message: "At least one code snippet is required",
  });

const referenceSolutionsSchema = z
  .record(z.string().min(1, { message: "Solution code cannot be empty" }))
  .refine((obj) => Object.keys(obj).length > 0, {
    message: "At least one reference solution is required",
  });

export const problemSchema = z.object({
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
  tags: z.array(z.string()),
  companies: z.array(z.string()).optional(),
  examples: examplesSchema,
  constraints: z.string(),
  hints: z.string().optional(),
  testcases: testcasesSchema,
  codeSnippets: codeSnippetsSchema,
  referenceSolutions: referenceSolutionsSchema,
});
