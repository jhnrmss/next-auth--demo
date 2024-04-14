"use client";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ActionMode: "redirect" | "onclick" | "navigation";
  path?: string;
}

const AppButton = (props: IButtonProps) => {
  const router = useRouter();

  const handleRedirectClick = () => {
    return router.push(props.path as string);
  };

  if (props.ActionMode === "navigation") {
    return (
      <Link href={props.path as string}>
        <Button variant={props.variant} className={cn(props.className)}>
          {props.children}
        </Button>
      </Link>
    );
  }

  return (
    <Button
      variant={props.variant}
      className={cn(props.className)}
      onClick={() =>
        props.ActionMode === "redirect" ? handleRedirectClick : props.onClick
      }
    >
      {props.children}
    </Button>
  );
};
export default AppButton;
