import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import WeekendQuranClassContent from '@components/programs/WeekendQuranClassContent';

describe('<WeekendQuranClassContent />', () => {
  it('renders', async () => {
    render(<WeekendQuranClassContent />);

    expect(screen.getByText("WEEKEND QUR'AN CLASS LIST")).toBeDefined();
    expect(await screen.findAllByText(/knowledge necessary/)).toHaveLength(2);
  });
});
