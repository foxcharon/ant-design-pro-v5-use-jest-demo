/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

it('renders welcome message', () => {
  render(<Login />);
  expect(screen.getByText('其他登录方式')).toBeInTheDocument();
});