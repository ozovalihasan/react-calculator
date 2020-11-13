import operate from './operate';
it('sums given values correctly', () => {
  expect(operate(2.3, 3.5, '+')).toEqual('5.8');
});

it('subtracks second value from first value correctly', () => {
  expect(operate(2.3, 3.5, '-')).toEqual('-1.2');
});

it('multiply given values correctly', () => {
  expect(operate(2.3, 3.5, 'X')).toEqual('8.05');
});

it('divides first value by second value correctly', () => {
  expect(operate(2.3, 4.6, '÷')).toEqual('0.5');
});
