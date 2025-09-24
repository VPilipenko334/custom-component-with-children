"use client";

import { BuilderBlockComponent, withChildren } from "@builder.io/react";
import { BuilderElement, type Component } from "@builder.io/sdk";
import { Container as BaseContainer, ContainerProps } from "./Container";
import { ContainerContainment } from "./enums";

interface BuilderContainerProps extends ContainerProps {
  builderBlock?: BuilderElement;
}

export const builderContainer = withChildren(
  ({
    containment,
    className,
    attributes,
    children,
    builderBlock,
  }: {
    containment?: ContainerContainment;
    className?: string;
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    children?: React.ReactNode;
    builderBlock?: import("@builder.io/sdk").BuilderElement;
  }) => {
    return (
      <BaseContainer
        containment={containment}
        className={className}
        {...attributes}
      >
        {children}
      </BaseContainer>
    );
  }
);

export const builderContainerConfig: Component = {
  name: "Container",
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "I am child text block!" } },
    },
  ],
  inputs: [
    {
      name: "containment",
      friendlyName: "Containment",
      type: "string",
      defaultValue: ContainerContainment.adaptive,
      enum: [
        ContainerContainment.adaptive,
        ContainerContainment.fluid,
        ContainerContainment.breakout,
        ContainerContainment.fullWidth,
      ],
      helperText: "How the container should handle width and containment",
    },
    {
      name: "className",
      friendlyName: "CSS Class",
      type: "string",
      helperText: "Additional CSS classes",
    },
  ],
};
