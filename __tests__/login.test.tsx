import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginForm from '@/app/ui/login-form';

test('Login Page', () => {
  render(<LoginForm />);
  expect(
    screen.getAllByRole('heading', {
      level: 1,
      name: 'Please log in to continue.',
    }),
  ).toBeDefined();
});
