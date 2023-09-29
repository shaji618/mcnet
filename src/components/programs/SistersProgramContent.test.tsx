import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SistersProgramContent from '@components/programs/SistersProgramContent';

describe('<AdultProgramContent />', () => {
  it('renders', async () => {
    render(<SistersProgramContent />);

    expect(screen.getByText('HALAQA')).toBeDefined();
    expect(screen.getByText("BEGINNERS' ARABIC FOR SISTERS")).toBeDefined();
    expect(screen.getByText('ADVANCED ARABIC FOR SISTERS')).toBeDefined();
    expect(await screen.findAllByText('When:')).toHaveLength(3);
    expect(await screen.findAllByText('Where:')).toHaveLength(3);
  });
});
