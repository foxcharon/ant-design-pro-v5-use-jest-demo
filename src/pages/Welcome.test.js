/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

it('renders welcome message', () => {
  render(<Welcome />);
  expect(screen.getByText('yarn add @ant-design/pro-table')).toBeInTheDocument();
});