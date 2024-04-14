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
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const methods = useForm();

  const handleSubmit = () => {
    console.log("Submitted");
  };
  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit} className="space-y-5 py-4">
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
          type="submit"
          ActionMode="onclick"
          className="w-full text-xl py-6"
        >
          Login
        </AppButton>
      </form>
    </Form>
  );
};

export default LoginForm;
