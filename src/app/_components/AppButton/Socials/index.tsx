"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import AppButton from "..";
const AppSocialButtons = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <AppButton
        variant={"outline"}
        ActionMode="onclick"
        size={"lg"}
        className="w-full"
      >
        <FcGoogle className="h-5 w-5" />
      </AppButton>
    </div>
  );
};

export default AppSocialButtons;
