import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Button from './Button';

let container = null;
let clickHandler;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  clickHandler = jest.fn();
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('creates a button with given click handler function, name, default width and color', () => {
  act(() => {
    render(<Button name="big_button" clickHandler={clickHandler} />, container);
  });
  expect(container.textContent).toBe('big_button');
  expect(screen.getByText(/big_button/).className).toBe('button main w-25');
  expect(screen.getByText(/big_button/).style['background-color']).toBe(
    'darkgray',
  );
  act(() => {
    fireEvent.click(screen.getByText(/big_button/));
  });
  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it('creates a button with given click handler function, name, larger width and default background color', () => {
  act(() => {
    render(
      <Button name="big_button" wide clickHandler={clickHandler} />,
      container,
    );
  });
  expect(screen.getByText(/big_button/).className).toBe('button main w-50');
});

it('creates a button with given click handler function, name, background color and default width', () => {
  act(() => {
    render(
      <Button name="big_button" color="orange" clickHandler={clickHandler} />,
      container,
    );
  });
  expect(screen.getByText(/big_button/).style['background-color']).toBe(
    'orange',
  );
});
