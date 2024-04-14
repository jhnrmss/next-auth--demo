import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Card>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
