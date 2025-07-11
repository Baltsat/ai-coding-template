# Project Template

A comprehensive development template with modern tooling and best practices.

## 🚀 Features

- **TypeScript**: Full TypeScript support with strict type checking
- **ESLint**: Code linting with comprehensive rules
- **Prettier**: Code formatting for consistency
- **Jest**: Testing framework with TypeScript support
- **Husky**: Git hooks for pre-commit quality checks
- **Semantic Release**: Automated versioning and changelog generation
- **GitHub Actions**: Complete CI/CD pipeline
- **Development Tools**: Comprehensive development infrastructure

## 📦 Quick Start

### Prerequisites

- Node.js (see `.nvmrc` for the required version)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd project-template

# Install dependencies
npm install

# Set up git hooks
npm run prepare
```

### Development

```bash
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Format code
npm run format

# Run tests
npm test

# Build the project
npm run build

# Run complete CI pipeline
npm run ci
```

## 📁 Project Structure

```text
├── src/                    # Source code
│   ├── __tests__/          # Test files
│   └── index.ts           # Main entry point
├── dist/                   # Build output (generated)
├── .github/               # GitHub configuration
│   ├── workflows/         # GitHub Actions
│   ├── linters/           # Linting configurations
│   └── config/            # Additional configurations
├── Docs/                  # Project documentation
├── jest.config.js         # Jest configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run lint` - Run ESLint on source files
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm test` - Run Jest tests
- `npm run build` - Build TypeScript to JavaScript
- `npm run ci` - Run complete CI pipeline (lint + test)
- `npm run release` - Create a semantic release

## 🧪 Testing

This project uses Jest for testing with TypeScript support. Test files should be placed in:

- `src/__tests__/` directory, or
- Named with `.test.ts` or `.spec.ts` suffix

Example test:

```typescript
import { main } from '../index';

describe('main function', () => {
  test('should run without throwing errors', () => {
    expect(() => main()).not.toThrow();
  });
});
```

## 🚀 CI/CD

The project includes a complete GitHub Actions CI/CD pipeline that:

1. **Lints** code using ESLint
2. **Tests** code using Jest
3. **Builds** the project using TypeScript
4. **Releases** using semantic-release (on main branch)

## 📝 Code Quality

### ESLint Configuration

- Located in `.github/linters/.eslintrc.js`
- Supports both JavaScript and TypeScript
- Includes Jest environment for test files
- Configurable rules for different file patterns

### Prettier Configuration

- Located in `.github/linters/.prettierrc`
- Consistent code formatting across the project
- Integrated with ESLint

### Git Hooks

- **Pre-commit**: Runs linting and formatting on staged files
- **Commit message**: Validates commit messages using conventional commits
- Configured via Husky and lint-staged

## 🔧 Configuration

### TypeScript

The `tsconfig.json` is configured for:

- ES2020 target
- CommonJS modules
- Strict type checking
- Source maps and declarations
- Output to `dist/` directory

### Jest

The `jest.config.js` is configured for:

- TypeScript support via ts-jest
- Test file discovery in `src/` directory
- Coverage reporting
- Node.js environment

## 📚 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the CI pipeline: `npm run ci`
5. Commit using conventional commits
6. Push and create a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### ESLint "No files matching pattern" Error

If you encounter this error, it means there are no source files to lint.
This template includes a basic `src/index.ts` file to resolve this. You can:

1. Add more source files to the `src/` directory
2. Modify the lint script patterns in `package.json`

### Jest Configuration Issues

Make sure you have `@types/jest` installed for TypeScript support:

```bash
npm install --save-dev @types/jest
```

### Node Version Issues

This project specifies a Node.js version in `.nvmrc`.
Use nvm to switch to the correct version:

```bash
nvm use
```
