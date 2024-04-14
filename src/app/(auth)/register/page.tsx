import AppCard from "@/app/_components/AppCard";
import React from "react";
import RegisterForm from "./register-form";
import AppButton from "@/app/_components/AppButton";

const Register = () => {
  return (
    <AppCard
      Header=" 🔐 Register"
      title="Welcome to Next Auth!"
      classCard="w-[400px]"
    >
      <RegisterForm />
      <AppButton
        ActionMode="redirect"
        path="/signin"
        variant={"link"}
        className="text-center w-full"
      >
        I have an account.
      </AppButton>
    </AppCard>
  );
};

export default Register;
