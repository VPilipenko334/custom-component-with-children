"use client";

import { builder, Builder, withChildren } from "@builder.io/react";
import React from "react";
import type { ComponentProps } from "react";
import { builderContainer } from "./components/Container/Builder";
import { builderContainerConfig } from "./components/Container/Builder";
import type { PropsWithChildren } from "react";
import CustomHero from "./components/CustomHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const HeroWithBuilderChildren = withChildren(CustomHero);

Builder.registerComponent(HeroWithBuilderChildren, {
  name: "CustomHero",
  inputs: [],
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "This is Builder text",
        },
      },
    },
  ],
});

Builder.registerComponent(builderContainer, {
  name: "Container",
  canHaveChildren: true,
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: {
        name: "Text",
        options: {
          text: "This is Builder text",
        },
      },
    },
  ],
});

Builder.registerComponent(builderContainer, builderContainerConfig);