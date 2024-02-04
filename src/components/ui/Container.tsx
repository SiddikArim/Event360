import { cn } from "@/lib/utils";
import { ReactElement, ReactNode } from "react";

type props = {
  children: ReactNode | ReactElement;
  className?: string;
};

const Container = ({ children, className }: props) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto ", className)}>{children}</div>
  );
};

export default Container;
