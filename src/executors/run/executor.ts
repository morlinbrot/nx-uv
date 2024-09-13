import { ExecutorContext } from "@nx/devkit";
import baseExecutor from "nx/src/executors/run-commands/run-commands.impl";
import { RunExecutorSchema } from "./schema";

export default async function executor(options: RunExecutorSchema, context: ExecutorContext) {
  // We want to run in the project's root.
  const cwd = context.projectsConfigurations.projects[context.projectName].root;

  const command = `uv run ${options.command}`;

  const opts = {
    command,
    cwd,
    ...options.runCommandsOpts,
  };

  return baseExecutor(opts, context);
}
