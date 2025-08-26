/**
 * Unit tests for Calculator Utility
 * Tests all arithmetic operations and error handling
 */

const { add, subtract, multiply, divide, power } = require('./index');

describe('Calculator Utility', () => {
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
      expect(add(0, 5)).toBe(5);
    });

    test('should add negative numbers correctly', () => {
      expect(add(-2, -3)).toBe(-5);
      expect(add(-10, 5)).toBe(-5);
      expect(add(5, -3)).toBe(2);
    });

    test('should add decimal numbers correctly', () => {
      expect(add(2.5, 3.5)).toBe(6);
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => add(2, '3')).toThrow('Both arguments must be numbers');
      expect(() => add(null, 3)).toThrow('Both arguments must be numbers');
      expect(() => add(2, undefined)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract function', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(10, 5)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract negative numbers correctly', () => {
      expect(subtract(-2, -3)).toBe(1);
      expect(subtract(-10, 5)).toBe(-15);
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract decimal numbers correctly', () => {
      expect(subtract(5.5, 3.5)).toBe(2);
      expect(subtract(0.3, 0.1)).toBeCloseTo(0.2);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => subtract('5', 3)).toThrow('Both arguments must be numbers');
      expect(() => subtract(5, '3')).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply function', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(10, 5)).toBe(50);
      expect(multiply(0, 5)).toBe(0);
    });

    test('should multiply negative numbers correctly', () => {
      expect(multiply(-2, -3)).toBe(6);
      expect(multiply(-10, 5)).toBe(-50);
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply decimal numbers correctly', () => {
      expect(multiply(2.5, 3)).toBe(7.5);
      expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => multiply('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => multiply(2, '3')).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide function', () => {
    test('should divide two positive numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
      expect(divide(10, 5)).toBe(2);
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide negative numbers correctly', () => {
      expect(divide(-6, -2)).toBe(3);
      expect(divide(-10, 5)).toBe(-2);
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide decimal numbers correctly', () => {
      expect(Math.round(divide(7.5, 2.5))).toBe(3);
      expect(Math.round(divide(0.6, 0.2))).toBe(3);
    });

    test('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for non-number arguments', () => {
      expect(() => divide('6', 2)).toThrow('Both arguments must be numbers');
      expect(() => divide(6, '2')).toThrow('Both arguments must be numbers');
    });
  });

  describe('power function', () => {
    test('should calculate positive powers correctly', () => {
      expect(power(2, 3)).toBe(8);
      expect(power(5, 2)).toBe(25);
      expect(power(10, 0)).toBe(1);
    });

    test('should calculate negative powers correctly', () => {
      expect(power(2, -1)).toBe(0.5);
      expect(power(4, -2)).toBe(0.0625);
    });

    test('should calculate fractional powers correctly', () => {
      expect(power(4, 0.5)).toBe(2);
      expect(power(8, 1 / 3)).toBeCloseTo(2);
    });

    test('should throw error for non-number arguments', () => {
      expect(() => power('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => power(2, '3')).toThrow('Both arguments must be numbers');
    });
  });

  describe('Edge cases and integration', () => {
    test('should handle large numbers', () => {
      expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
      expect(multiply(1000000, 1000000)).toBe(1000000000000);
    });

    test('should handle very small numbers', () => {
      expect(add(Number.MIN_VALUE, Number.MIN_VALUE)).toBe(
        Number.MIN_VALUE * 2
      );
    });

    test('should maintain precision for common operations', () => {
      const result = add(0.1, 0.2);
      expect(result).toBeCloseTo(0.3);
    });
  });
});
