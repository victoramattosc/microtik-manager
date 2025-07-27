import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard title', () => {
  render(<App />);
  const titles = screen.getAllByText(/dashboard nacional/i);
  expect(titles.length).toBeGreaterThan(0);
});
