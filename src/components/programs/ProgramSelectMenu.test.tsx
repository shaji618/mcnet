import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProgramSelectMenu from '@components/programs/ProgramSelectMenu';

describe('<ProgramSelectMenu />', () => {
  beforeEach(() => {
    render(<ProgramSelectMenu />);
  });

  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    expect(screen.findByText('Program')).toBeDefined();
    expect(
      screen.findByText(
        'Select an option above to see programs offered by MCNET'
      )
    ).toBeDefined();
  });

  it('defaults to "Youth Program" option', () => {
    expect(screen.findByText('YOUTH PROGRAM')).toBeDefined();
    expect(
      screen.findByText(/MCNET does not have a youth program at this time/)
    ).toBeDefined();
  });

  it('can select options', async () => {
    const selectMenu = await screen.findByRole('button');
    userEvent.click(selectMenu);
    userEvent.click(
      await screen.findByRole('option', {
        name: 'Adult Program'
      })
    );

    expect(
      screen.findByText('MUSLIM EDUCATION AND SUPPORT GROUP CLASS')
    ).toBeDefined();
    expect(
      screen.findByText(
        /The Muslim Education and Support Group meets every Sunday evening/
      )
    ).toBeDefined();
  });
});
