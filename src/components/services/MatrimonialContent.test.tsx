import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MatrimonialContent from '@components/services/MatrimonialContent';
import { BrowserRouter } from 'react-router-dom';

describe('<MatrimonialContent />', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <MatrimonialContent />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Congratulations on your upcoming wedding/)
    ).toBeDefined();
  });
});
