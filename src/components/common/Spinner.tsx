import React from "react";
import { cn } from "@/lib/utils"; // si tu as une utilitaire className, sinon enlève-le
import { SpinnerProps } from "@/src/types/common";

export const Spinner = ({ className, ...props }: SpinnerProps) => (
  <div
    className={cn(
      "inline-block animate-spin rounded-full border-4 border-secondary/40 border-t-secondary",
      className
    )}
    {...props}
  />
);
