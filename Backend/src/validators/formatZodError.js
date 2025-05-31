import { ZodError } from "zod";

export const formatZodError = (err) => {
  if (err instanceof ZodError) {
    return err.errors.map((e) => ({
      path: e.path.join("."),
      message: e.message,
    }));
  }
  return null;
};
