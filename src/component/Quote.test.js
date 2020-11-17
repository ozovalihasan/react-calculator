import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Quote from './Quote';

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

it('shows static text', () => {
  act(() => {
    render(<Quote />, container);
  });
  expect(container.textContent).toBe(
    'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
  );
});
