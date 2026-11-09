const { sumar, restar, multiplicar, dividir } = require('./calculator');

describe('Pruebas unitarias del módulo Calculadora UTP', () => {
  test('Suma correcta de dos números', () => {
    expect(sumar(5, 5)).toBe(10);
  });

  test('Resta correcta de dos números', () => {
    expect(restar(10, 4)).toBe(6);
  });

  test('Multiplicación correcta', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('División correcta', () => {
    expect(dividir(20, 5)).toBe(4);
  });

  test('Error al dividir por cero', () => {
    expect(() => dividir(10, 0)).toThrow('No es posible dividir entre cero');
  });
});
