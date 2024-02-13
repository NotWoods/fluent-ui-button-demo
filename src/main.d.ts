/// <reference types="react" />

export const Button: React.FC<{
  icon?: object;
  children?: React.ReactNode;
}>;

export const FluentProvider: React.FC<{
  theme?: object;
  dir?: "ltr" | "rtl";
  className?: string;
  children?: React.ReactNode;
}>;

export function makeStyles<Slots extends string | number>(
  stylesBySlots: Record<Slots, object>
): () => Record<Slots, string>;

export const webLightTheme: object;

export const Checkmark20Regular: React.FC;
export const Checkmark48Filled: React.FC;
