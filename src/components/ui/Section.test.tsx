import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Section } from './Section';

describe('Section', () => {
  it('is a landmark labelled by its heading', () => {
    render(
      <Section id="skills" title="Skills" intro="Grouped by use.">
        <p>Body</p>
      </Section>,
    );

    expect(screen.getByRole('region', { name: 'Skills' })).toHaveAttribute('id', 'skills');
    expect(screen.getByRole('heading', { level: 2, name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
  });
});
