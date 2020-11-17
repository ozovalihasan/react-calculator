import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from './Home';

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

it('shows static text ', () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.textContent).toBe(
    'Welcome to our pageLorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus iste, reprehenderit, quam dignissimos explicabo aperiam quisquam voluptatibus molestias aliquam natus commodi necessitatibus cum quibusdam sapiente ipsa assumenda aut eius!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora repellendus iste, reprehenderit, quam dignissimos explicabo aperiam quisquam voluptatibus molestias aliquam natus commodi necessitatibus cum quibusdam sapiente ipsa assumenda aut eius!',
  );
});
