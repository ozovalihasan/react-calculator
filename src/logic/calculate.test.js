import calculate from './calculate';

it('returns arranged form of the operation if any operation button is pressed and there is no a previous operation', () => {
  expect(calculate({ total: '', next: '10', operation: '' }, '+')).toEqual({
    total: '10',
    next: '',
    operation: '+',
  });
});

it('returns result of previous operation if any operation button is pressed and there is a previous operation', () => {
  expect(calculate({ total: '4', next: '10', operation: 'X' }, '+')).toEqual({
    total: '40',
    next: '',
    operation: '+',
  });
});

it('adds pressed button to next if any number is pressed ', () => {
  expect(calculate({ total: '4', next: '10', operation: 'X' }, '2')).toEqual({
    total: '4',
    next: '102',
    operation: 'X',
  });
});

it('adds pressed button to next if dot button is pressed ', () => {
  expect(calculate({ total: '4', next: '10', operation: '' }, '.')).toEqual({
    total: '4',
    next: '10.',
    operation: '',
  });
});

it('returns result of the previous calculation if equal button is pressed ', () => {
  expect(calculate({ total: '4', next: '10', operation: 'X' }, '=')).toEqual({
    total: '',
    next: '40',
    operation: '',
  });
});

it('returns input if equal button is pressed and there is no previous calculation ', () => {
  expect(calculate({ total: '', next: '10', operation: '' }, '=')).toEqual({
    total: '',
    next: '10',
    operation: '',
  });
});

it('returns one percent of next if percentage button is pressed ', () => {
  expect(calculate({ total: '4', next: '10', operation: 'X' }, '%')).toEqual({
    total: '4',
    next: '0.1',
    operation: 'X',
  });
});

it('returns result of multiplying next with -1 if +/- button is pressed', () => {
  expect(calculate({ total: '4', next: '10', operation: 'X' }, '+/-')).toEqual({
    total: '4',
    next: '-10',
    operation: 'X',
  });
});

describe('Dividing zero', () => {
  it('returns Infinity if positive number is given', () => {
    expect(calculate({ total: '4', next: '0', operation: '÷' }, '=')).toEqual({
      total: '',
      next: 'Infinity',
      operation: '',
    });
  });

  it('returns -Infinity if negative number is given', () => {
    expect(calculate({ total: '-4', next: '0', operation: '÷' }, '=')).toEqual({
      total: '',
      next: '-Infinity',
      operation: '',
    });
  });

  it('returns NaN if O is given', () => {
    expect(calculate({ total: '0', next: '0', operation: '÷' }, '=')).toEqual({
      total: '',
      next: 'NaN',
      operation: '',
    });
  });
});

describe('Stop calculation', () => {
  it('returns input without change if total equals to NaN', () => {
    expect(calculate({ total: '', next: 'NaN', operation: '' }, '3')).toEqual({
      total: '',
      next: 'NaN',
      operation: '',
    });
  });
  it('returns input without change if total equals to Infinity', () => {
    expect(
      calculate({ total: '', next: 'Infinity', operation: '' }, '3')
    ).toEqual({
      total: '',
      next: 'Infinity',
      operation: '',
    });
  });
  it('returns input without change if total equals to -Infinity', () => {
    expect(
      calculate({ total: '', next: '-Infinity', operation: '' }, '3')
    ).toEqual({
      total: '',
      next: '-Infinity',
      operation: '',
    });
  });
});

it('resets everyting if AC button is pressed', () => {
  expect(calculate({ total: '3', next: '5', operation: '/' }, 'AC')).toEqual({
    total: '',
    next: '',
    operation: '',
  });
});

it('updates operation if next is empty string', () => {
  expect(calculate({ total: '3', next: '', operation: 'X' }, '+')).toEqual({
    total: '3',
    next: '',
    operation: '+',
  });
});

it('return zero if result of calculation is less than 5*10^-21', () => {
  expect(calculate({ total: '1e-20', next: '3', operation: '÷' }, '=')).toEqual(
    {
      total: '',
      next: '0',
      operation: '',
    }
  );
});

it('return zero if result of calculation is less than 5*10^-21', () => {
  expect(calculate({ total: '1e-20', next: '3', operation: '÷' }, '=')).toEqual(
    {
      total: '',
      next: '0',
      operation: '',
    }
  );
});
