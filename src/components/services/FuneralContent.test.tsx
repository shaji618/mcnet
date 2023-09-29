import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FuneralContent from '@components/services/FuneralContent';
import { BrowserRouter } from 'react-router-dom';

describe('<FuneralContent />', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <FuneralContent />
      </BrowserRouter>
    );

    expect(
      screen.getByText(
        'Verily, it is We who give life and death, and to Us is the final goal.'
      )
    ).toBeDefined();
    expect(
      screen.getByText(/MCNET can assist with the following funeral needs/)
    ).toBeDefined();
  });
});
