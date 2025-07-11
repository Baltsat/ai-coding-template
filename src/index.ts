/**
 * Main entry point for the application
 */

export function main(): void {
  console.log('Hello, World!'); // eslint-disable-line no-console
}

// Run main function if this file is executed directly
if (require.main === module) {
  main();
}
