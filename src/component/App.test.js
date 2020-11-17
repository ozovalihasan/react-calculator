import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('<App />', () => {
  it('shows static text', () => {
    render(<App />);
    expect(screen.getByText("Let's do some math")).toBeTruthy();
  });

  it('shows result of operations done correctly', () => {
    render(<App />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('-'));
    expect(screen.getByText(/15-/)).toBeTruthy();

    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByText(/12/)).toBeTruthy();
  });
});
