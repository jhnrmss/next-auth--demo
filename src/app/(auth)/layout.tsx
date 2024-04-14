import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
