"use client";
import AppButton from "@/app/_components/AppButton";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignInSchema, SignInType } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const methods = useForm<SignInType>({
    mode: "onChange",
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: SignInType) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <div className="space-y-5 py-4">
        <FormField
          control={methods.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={methods.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <AppButton
          ActionMode="onclick"
          onClick={methods.handleSubmit(onSubmit)}
          className="w-full text-xl py-6"
        >
          Login
        </AppButton>
      </div>
    </Form>
  );
};

export default LoginForm;
