const square = require('./square');

describe('square', () => {
  // Вызовется перед каждым тестом
  beforeEach(() => {});
  // Вызовется один раз перед всеми тестами
  beforeAll(() => {});

  test('Корректное значение', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('Корректное значение', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  // Вызовется после каждого теста
  afterEach(() => {
    jest.clearAllMocks();  // если не добавить этот метод, то второй тест упадет, т.к. моки накапливаются
  });
  // Вызовется один раз после всех тестов
  afterAll(() => {});

});