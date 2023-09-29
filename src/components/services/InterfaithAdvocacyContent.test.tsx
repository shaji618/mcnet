import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InterfaithAdvocacyContent from '@components/services/InterfaithAdvocacyContent';
import { BrowserRouter } from 'react-router-dom';

describe('<InterfaithAdvocacyContent />', () => {
  it('renders', () => {
    render(
      <BrowserRouter>
        <InterfaithAdvocacyContent />
      </BrowserRouter>
    );

    expect(
      screen.getByText(
        'O men! Behold, We have created you all out of a male and a female, and have made you into nations and tribes, so that you might come to know one another. Verily, the noblest of you in the sight of God is the one who is most deeply conscious of Him. Behold, God is all-knowing, all-aware.'
      )
    ).toBeDefined();
    expect(screen.getByText('MOSQUE ETIQUETTE')).toBeDefined();
  });
});
