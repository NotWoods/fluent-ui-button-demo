import type { ComponentChildren, FunctionComponent } from "preact";

export const Button: FunctionComponent<{
  icon?: object;
  children?: ComponentChildren;
}>;

export const FluentProvider: FunctionComponent<{
  theme?: object;
  dir?: "ltr" | "rtl";
  className?: string;
  children?: ComponentChildren;
}>;

export function makeStyles<Slots extends string | number>(
  stylesBySlots: Record<Slots, object>
): () => Record<Slots, string>;

export const webLightTheme: object;

export const Checkmark20Regular: FunctionComponent;
export const Checkmark48Filled: FunctionComponent;
