import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ButtonPanel from './ButtonPanel';

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

it('shows different 19 buttons', () => {
  act(() => {
    render(<ButtonPanel clickHandler={clickHandler} />, container);
  });
  expect(container.querySelectorAll('button').length).toEqual(19);
  expect(container.textContent).toBe('AC+/-%÷789X456-123+0.=');
});

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonPanel clickHandler={clickHandler} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
