# nx-uv

A [uv] plugin for Nx.

## Usage

The plugin provides uv executors that you can add to your project's `project.json`:

```json
{
  "targets": {
    "uv-run": {
      "executor": "@mindcloud/nx-uv:run"
    },
    "lint": {
      "executor": "@mindcloud/nx-uv:run",
      "options": {
        "command": "ruff check"
      }
    }
}
```
