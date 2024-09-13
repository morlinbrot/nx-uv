import { ExecutorContext } from "@nx/devkit";

import executor from "./executor";
import { RunExecutorSchema } from "./schema";

const options: RunExecutorSchema = {
  command: "-h",
  runCommandsOpts: {
    __unparsed__: [],
    args: "--test-arg=true",
  },
};

const context: ExecutorContext = {
  root: "",
  cwd: process.cwd(),
  isVerbose: false,
  projectName: "test-project",
  projectsConfigurations: {
    version: 2,
    projects: {
      "test-project": {
        root: "python/test-project",
      },
    },
  },
};

describe("Run Executor", () => {
  it("can run", async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
    expect(output.terminalOutput).toContain("Run a command or script");
  });
});
