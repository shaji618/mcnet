import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChaplaincyContent from '@components/services/ChaplaincyContent';
import { BrowserRouter } from 'react-router-dom';

describe('<ChaplaincyContent />', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <ChaplaincyContent />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/If you need assistance with your spiritual needs/)
    ).toBeDefined();
  });
});
