import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders imagesearch header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/image/i);
  expect(linkElement).toBeInTheDocument();
});