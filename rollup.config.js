import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  input: "src/main.js",
  output: {
    file: "bundle.js",
    paths: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "react/jsx-dev-runtime": "preact/jsx-dev-runtime",
    },
  },
  plugins: [
    nodeResolve(),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    commonjs(),
  ],
  external: [
    /^p?react(\/[\w-]+)?$/,
    "react-dom",
    "react-is",
    "scheduler",
    "prop-types",
  ],
});
