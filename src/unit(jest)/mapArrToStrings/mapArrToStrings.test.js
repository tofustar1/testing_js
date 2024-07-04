const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  test('Массив с корректными значениями', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Массив с разными значениями', () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, 'test'])).toEqual(['1', '2', '3']);
  });
  test('Пустой массив', () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test('Отрицание', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
  });
});