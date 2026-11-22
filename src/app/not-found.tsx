import { ButtonLink } from '@/components/ui/ButtonLink';

export default function NotFound() {
  return (
    <section style={{ padding: '6rem var(--gutter)', maxWidth: '40rem', marginInline: 'auto' }}>
      <h1 style={{ fontSize: 'var(--text-2xl)' }}>Page not found</h1>
      <p style={{ margin: '1rem 0 2rem', color: 'var(--color-ink-muted)' }}>
        This address does not exist. The portfolio lives on the home page.
      </p>
      <ButtonLink href="/">Go to home page</ButtonLink>
    </section>
  );
}
