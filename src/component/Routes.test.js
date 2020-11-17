import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Routes from './Routes';

describe('<Routes />', () => {
  it('shows correct pages when any link is clicked', () => {
    render(<Routes />);
    fireEvent.click(screen.queryByText('Home'));
    expect(screen.queryByText(/Welcome to our page/)).toBeTruthy();
    expect(screen.queryByText(/Let's do some math/)).toBeFalsy();
    expect(screen.queryByText(/Mathematics is not about numbers/)).toBeFalsy();

    fireEvent.click(screen.queryByText('Calculator'));
    expect(screen.queryByText(/Welcome to our page/)).toBeFalsy();
    expect(screen.queryByText(/Let's do some math/)).toBeTruthy();
    expect(screen.queryByText(/Mathematics is not about numbers/)).toBeFalsy();

    fireEvent.click(screen.queryByText('Quote'));
    expect(screen.queryByText(/Welcome to our page/)).toBeFalsy();
    expect(screen.queryByText(/Let's do some math/)).toBeFalsy();
    expect(screen.queryByText(/Mathematics is not about numbers/)).toBeTruthy();
  });

  it('renders correctly', () => {
    const component = renderer.create(<Routes />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
