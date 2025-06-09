import { array, z } from "zod";
export const executeCodeSchema = z.object({
  source_code: z
    .string()
    .min(1, { message: "source_code must be a nonempty string" }),
  language_id: z.number({
    required_error: "language_id is required",
    invalid_type_error: "language_id must be a number",
  }),
  stdin: z
    .array(
      z.string().min(1, { message: "Each input must be a nonempty string" })
    )
    .nonempty({ message: "At least one input is required" }),
  expected_outputs: z
    .array(
      z
        .string()
        .min(1, { message: "Each expected output must be a nonempty string" })
    )
    .nonempty({ message: "At least one output is required" }),
  problemId: z
    .string()
    .min(1, { message: "problemId must be a nonempty string" }),
});
export const submitCodeSchema = z.object({
  source_code: z
    .string()
    .min(1, { message: "source_code must be a nonempty string" }),
  language_id: z.number({
    required_error: "language_id is required",
    invalid_type_error: "language_id must be a number",
  }),
  stdin: z
    .array(
      z.string().min(1, { message: "Each input must be a nonempty string" })
    )
    .nonempty({ message: "At least one input is required" }),
  expected_outputs: z
    .array(
      z
        .string()
        .min(1, { message: "Each expected output must be a nonempty string" })
    )
    .nonempty({ message: "At least one output is required" }),
  problemId: z
    .string()
    .min(1, { message: "problemId must be a nonempty string" }),
});
