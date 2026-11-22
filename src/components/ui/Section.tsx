import type { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {intro ? <p className={styles.intro}>{intro}</p> : null}
        </header>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
