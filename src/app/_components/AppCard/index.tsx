import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const AppCard = ({
  children,
  Header,
  title,
  hasSocials,
  ...props
}: ICardProps) => {
  return (
    <Card
      className={cn(
        props.classCard,
        "flex flex-col justify-center items-center shadow-md rounded-lg"
      )}
    >
      <CardHeader className={cn(props.classHeader, "text-5xl font-semibold")}>
        {Header}
      </CardHeader>
      <CardTitle className={cn(props.classTitle, "text-xl text-slate-600")}>
        {title}
      </CardTitle>
      <CardContent className={props.classContent}>{children}</CardContent>
    </Card>
  );
};

export default AppCard;
