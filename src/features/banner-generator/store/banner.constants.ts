import { findDefaultOrFirst } from "../utils/banner.utils";
import type { Gradient, GradientDirection } from "./banner.types";

export const GRADIENTS = [
  {
    name: "@lokiverse/tool",
    class: "from-teal-400 to-blue-500",
    default: true,
  },
  {
    name: "@lokiverse/lib",
    class: "from-yellow-400 via-orange-500 to-red-400",
  },
  { name: "@lokiverse/app", class: "from-red-400 via-yellow-400 to-green-400" },
] as const;

export const GRADIENT_DIRECTIONS = [
  { name: "Right", value: "bg-gradient-to-r", default: true },
  { name: "Left", value: "bg-gradient-to-l" },
  { name: "Bottom", value: "bg-gradient-to-b" },
  { name: "Top", value: "bg-gradient-to-t" },
  { name: "Bottom Right", value: "bg-gradient-to-br" },
  { name: "Bottom Left", value: "bg-gradient-to-bl" },
  { name: "Top Right", value: "bg-gradient-to-tr" },
  { name: "Top Left", value: "bg-gradient-to-tl" },
] as const;

export const DEFAULT_CONFIG = {
  title: "@lokiverse",
  version: "",
  subtitle: "",
  gradient: findDefaultOrFirst<Gradient>(GRADIENTS),
  direction: findDefaultOrFirst<GradientDirection>(GRADIENT_DIRECTIONS),
} as const;
