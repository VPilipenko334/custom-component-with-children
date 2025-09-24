import React, { forwardRef, HTMLAttributes } from "react";
import { ContainerContainment } from "./enums";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  containment?: ContainerContainment;
  className?: string;
  children: React.ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      containment = ContainerContainment.adaptive,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
