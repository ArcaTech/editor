import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
	input: "./src/index.ts",
	output: {
		file: "./dist/app.js",
		format: "iife",
		sourcemap: true,
	},
	plugins: [typescript(), nodeResolve({
		browser: true,
		dedupe: [
			"@codemirror/state",
			"@codemirror/view",
			"@codemirror/language"
		]
	})]
};