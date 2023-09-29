import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import YouthProgramContent from '@components/programs/YouthProgramContent';

describe('<YouthProgramContent />', () => {
  it('renders', async () => {
    render(<YouthProgramContent />);

    expect(screen.getByText('YOUTH PROGRAM')).toBeDefined();
    expect(
      screen.getByText(/MCNET does not have a youth program at this time/)
    ).toBeDefined();
  });
});
