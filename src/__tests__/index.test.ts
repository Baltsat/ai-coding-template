import { main } from '../index';

describe('main function', () => {
  test('should run without throwing errors', () => {
    // Mock console.log to avoid output during tests
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    expect(() => main()).not.toThrow();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, World!');

    // Restore console.log
    consoleSpy.mockRestore();
  });
});
