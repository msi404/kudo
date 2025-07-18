#!/usr/bin/env node

import { program } from "commander";
import { execa } from "execa";
import fs from "fs-extra";
import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Required because __dirname is not available in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const templateDir = path.join(__dirname, "../templates");

const run = async () => {
	program
		.name("create-kudo-app")
		.description(
			"Scaffold a Next.js app with prettier, husky, commitlint, and pnpm"
		)
		.argument("<project-name>", "Project name")
		.action(async (projectName: any) => {
			const projectPath = path.resolve(process.cwd(), projectName);
			console.log(
				chalk.cyan(`🚀 Creating Next.js app: ${projectName}...`)
			);
			await execa(
				"npx",
				["create-next-app@latest", projectName, "--ts"],
				{ stdio: "inherit" }
			);
			process.chdir(projectPath);
			console.log(chalk.cyan("🔁 Switching to pnpm..."));
			await fs.remove("package-lock.json");
			await fs.remove("README.md");
			await fs.remove("node_modules");
			await execa( "pnpm", [ "install" ], { stdio: "inherit" } );
			// Add "generate-api" script to package.json
const packageJsonPath = path.join(projectPath, "package.json");
const packageJson = await fs.readJson(packageJsonPath);

packageJson.scripts = packageJson.scripts || {};
packageJson.scripts["generate-api"] = "npx @rtk-query/codegen-openapi ./app/_shared/config/openapi-config.cts";

await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

console.log(chalk.cyan("📝 Added 'generate-api' script to package.json"));

			console.log(chalk.cyan("🎨 Installing Prettier..."));
			await execa("pnpm", ["add", "-D", "prettier"], {
				stdio: "inherit",
			});
			console.log(chalk.cyan("🔐 Installing Husky & Commitlint..."));
			await execa(
				"pnpm",
				[
					"add",
					"-D",
					"husky",
					"@commitlint/cli",
					"@commitlint/config-conventional",
					"@commitlint/types",
					"eslint-config-prettier",
					"eslint-plugin-prettier",
					"eslint-plugin-no-relative-import-paths",
					"@typescript-eslint/eslint-plugin",
					"eslint-plugin-simple-import-sort",
					"stylelint",
					"stylelint-config-standard",
					"stylelint-config-standard-scss",
					"stylelint-config-tailwindcss",
					"@rtk-query/codegen-openapi",
					"ts-node",
					"esbuild-runner"
				],
				{
					stdio: "inherit",
				}
			);
			await execa(
				"pnpm",
				["add", "@kudojs/toolbox", "react-redux", "motion", "@reduxjs/toolkit", "@casl/react", "@casl/ability"],
				{ stdio: "inherit" }
			);
			console.log(chalk.cyan("⚙️ Writing configuration files..."));
			// Delete original ESLint and Commitlint configs from Next.js starter
			await Promise.all([
				fs.remove(path.join(projectPath, "eslint.config.mjs")),
			] );
			
			await fs.remove(path.join(projectPath, "app"));

			await fs.copy(templateDir, projectPath, { overwrite: true });
			console.log(chalk.cyan("📦 Setting up Husky..."));
			await execa("npx", ["husky", "init"], { stdio: "inherit" });
			const huskyDir = path.join(projectPath, ".husky");
			const preCommitPath = path.join(huskyDir, "pre-commit");
			await fs.writeFile(preCommitPath, "", "utf8");
			// Create commit-msg hook
			const commitMsgPath = path.join(huskyDir, "commit-msg");
			const commitMsgContent = `pnpm commitlint --edit`;
			await fs.writeFile(commitMsgPath, commitMsgContent, {
				mode: 0o755,
			});

			console.log( chalk.green( "✅ Husky hooks configured!" ) );
			console.log(chalk.cyan("🖍️ Checking css..."));
			await execa(
				"npx",
				["stylelint", "**/*.css", "--fix"],
				{
					stdio: "inherit",
				}
			);
			console.log(chalk.green("🥋 You're ready for the black belt."));
		});
	program.parse();
};

run();
