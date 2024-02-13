import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  input: "src/main.js",
  output: {
    file: "bundle.js",
  },
  plugins: [
    nodeResolve(),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    commonjs(),
  ],
  external: ["react", "react-dom", "react-is", "scheduler", "prop-types"],
});
