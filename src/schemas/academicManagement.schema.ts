import { z } from "zod";

export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select a semester name" }),
  year: z.string({ required_error: "Please select a semester year" }),
  startMonth: z.string({
    required_error: "Please select a semester start month",
  }),
  endMonth: z.string({
    required_error: "Please select a semester end month",
  }),
});
