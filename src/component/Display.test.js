import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Display from './Display';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('shows 0 if all props equal to empty string', () => {
  act(() => {
    render(<Display next="" total="" operation="" />, container);
  });
  expect(container.textContent).toBe('0');
});

it('shows joined form of all props if any props is not equal to empty string ', () => {
  act(() => {
    render(<Display next="" total="2" operation="+" />, container);
  });
  expect(container.textContent).toBe('2+');
});

it('renders correctly', () => {
  const tree = renderer
    .create(<Display next="" total="2" operation="+" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
