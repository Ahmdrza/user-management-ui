import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Users heading', () => {
  render(<App />);
  const heading = screen.getByText(/Users/i);
  expect(heading).toBeInTheDocument();
});
