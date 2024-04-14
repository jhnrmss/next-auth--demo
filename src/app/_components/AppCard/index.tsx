import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  Header: string;
  title: string;
  hasSocials?: boolean;
  classHeader?: string;
  classTitle?: string;
  classCard?: string;
  classContent?: string;
}

const AppCard = ({ children, Header, title, ...props }: ICardProps) => {
  return (
    <Card className={cn(props.classCard, "shadow-md rounded-lg")}>
      <CardHeader
        className={cn(props.classHeader, "text-5xl font-semibold text-center")}
      >
        {Header}
      </CardHeader>
      <CardTitle
        className={cn(props.classTitle, "text-base text-slate-600 text-center")}
      >
        {title}
      </CardTitle>
      <CardContent className={cn(props.classContent, "space-y-2")}>
        {children}
      </CardContent>
    </Card>
  );
};

export default AppCard;
