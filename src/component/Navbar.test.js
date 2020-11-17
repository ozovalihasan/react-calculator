import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import Navbar from './Navbar';

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

it('contains 3 links with different urls', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
      container
    );
  });
  // expect(getByText("Click Me").href).toBe("https://www.test.com/")
  expect(container.textContent).toBe('Math MagiciansHome|Calculator|Quote');
  expect(screen.getByText('Home').href).toBe('http://localhost/');
  expect(screen.getByText('Calculator').href).toBe(
    'http://localhost/calculator'
  );
  expect(screen.getByText('Quote').href).toBe('http://localhost/quote');
});
