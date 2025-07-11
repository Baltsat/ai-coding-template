module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true, // Added jest environment to fix test file errors
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
  },
  // Add overrides for specific file patterns if needed
  overrides: [
    // Configuration for test files
    {
      files: ['**/tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true,
        // This ensures Jest globals like describe, test, expect are recognized
      },
    },
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        // TypeScript-specific rules can be added here
      },
    },
  ],
};
