import React from 'react';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Test", () => {
  beforeEach(() => {
    render(<App />);
  });
  test('should show title', () => {
    expect(screen.getByText(/Chore List/i)).toBeDefined();
  })
})
