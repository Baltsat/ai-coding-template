# Git Hooks

This directory contains Git hooks managed by [Husky](https://typicode.github.io/husky/).

## Available Hooks

### Pre-Commit

- Runs `lint-staged` on staged files
- Executes ESLint, Prettier, and Jest tests on modified files
- Ensures code quality and consistent formatting before commits

### Commit-Msg

- Validates commit messages against [Conventional Commits](https://www.conventionalcommits.org/) format
- Uses `commitlint` to enforce consistent commit history
- Ensures proper commit message structure

## Hook Details

### Pre-Commit Hook

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Run lint-staged to check code quality
npx lint-staged
```

**What it does:**

- Runs ESLint with auto-fix on JavaScript/TypeScript files
- Formats code with Prettier
- Runs Jest tests for modified files
- Formats JSON, YAML files
- Lints Markdown files

### Commit-Msg Hook

```sh
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Check if commitlint is installed
if ! command -v npx commitlint &> /dev/null; then
  echo "commitlint is not installed. Skipping commit message validation."
  exit 0
fi

# Validate commit message format
npx --no -- commitlint --edit $1
```

**What it does:**

- Validates commit message format
- Enforces conventional commit standards
- Ensures proper commit type (feat, fix, docs, etc.)

## Adding or Modifying Hooks

1. Create or edit a file in this directory with the hook name
2. Make the file executable with `chmod +x .husky/hook-name`
3. Add your script content, starting with:

   ```sh
   #!/usr/bin/env sh
   . "$(dirname -- "$0")/_/husky.sh"

   # Your commands here
   ```

## Skipping Hooks

To skip hooks temporarily, use the `--no-verify` flag with Git commands:

```sh
git commit --no-verify -m "Your message"
git push --no-verify
```

**Note:** Use this sparingly, as hooks are in place to maintain code quality.

## Configuration

Hooks are configured through:

- `package.json` - lint-staged configuration
- `.github/config/commitlint.config.js` - commit message rules
- `.github/linters/` - ESLint and Prettier configurations
