import { ExecutorContext } from '@nx/devkit';

import executor from './executor';
import { RunExecutorSchema } from './schema';

const options: RunExecutorSchema = {
  command: 'ruff check',
};

const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('Run Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
