import { RunCommandsOptions } from "nx/src/executors/run-commands/run-commands.impl";

export type RunExecutorSchema = {
  command: string;
  runCommandsOpts: Omit<RunCommandsOptions, "command" | "commands" | "cwd"> & { __unparsed__: string[] };
};
