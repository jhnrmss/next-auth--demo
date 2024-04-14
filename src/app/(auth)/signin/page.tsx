import AppCard from "@/app/_components/AppCard";
import React from "react";
import LoginForm from "./login-form";
import AppButton from "@/app/_components/AppButton";
import AppSocialButtons from "@/app/_components/AppButton/Socials";

const SignIn = () => {
  return (
    <AppCard
      Header=" 🔐 Sign In"
      title="Welcome to Next Auth!"
      classCard="w-[400px]"
      hasSocials
    >
      <LoginForm />
      <AppSocialButtons />
      <AppButton
        ActionMode="redirect"
        path="/register"
        variant={"link"}
        className="text-center w-full"
      >
        You dont have an account?
      </AppButton>
    </AppCard>
  );
};

export default SignIn;
