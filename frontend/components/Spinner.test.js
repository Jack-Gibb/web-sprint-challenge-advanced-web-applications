import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Spinner from './Spinner';

test('Spinner renders correctly when on is true', () => {
  render(<Spinner on={true} />);
  expect(screen.getByText(/please wait/i)).toBeInTheDocument();
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByRole('heading')).toHaveTextContent('.');
});

test('Spinner does not render when on is false', () => {
  render(<Spinner on={false} />);
  expect(screen.queryByText(/please wait/i)).not.toBeInTheDocument();
  expect(screen.queryByRole('heading')).not.toBeInTheDocument();
});

test('sanity', () => {
  expect(true).toBe(true);
});
