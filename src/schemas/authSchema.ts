import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string({ required_error: "Email is a required." }),
  password: z.string({ required_error: "Password is a required." }),
});

export const RegisterSchema = z.object({
  email: z.string({ required_error: "Email is a required." }),
  password: z.string({ required_error: "Password is a required." }),
  confirmPassword: z.string({
    required_error: "ConfirmPassword is a required.",
  }),
});

export type SignInType = z.infer<typeof SignInSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>;
