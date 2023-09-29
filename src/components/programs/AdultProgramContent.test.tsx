import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AdultProgramContent from '@components/programs/AdultProgramContent';

describe('<AdultProgramContent />', () => {
  it('renders', () => {
    render(<AdultProgramContent />);

    expect(
      screen.getByText('MUSLIM EDUCATION AND SUPPORT GROUP CLASS')
    ).toBeDefined();
    expect(
      screen.getByText(/The Muslim Education and Support Group meets/)
    ).toBeDefined();
  });
});
