import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: props) => {
  return (
    <div className={cn("max-w-[1280px] mx-auto p-4", className)}>
      {children}
    </div>
  );
};

export default Container;
