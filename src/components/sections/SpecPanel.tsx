import type { CSSProperties } from 'react';
import { TagList } from '@/components/ui/TagList';
import { profile } from '@/content/profile';
import styles from './SpecPanel.module.scss';

/** A props table styled like component documentation, the one signature element of the page. */
export function SpecPanel() {
  return (
    <aside className={styles.panel} aria-label="Profile at a glance">
      <div className={styles.bar}>
        <span className={styles.component}>&lt;Engineer /&gt;</span>
        <span>props</span>
      </div>
      <dl className={styles.list}>
        {profile.specSheet.map((row, index) => (
          <div
            key={row.label}
            className={styles.row}
            style={{ '--row-index': index } as CSSProperties}
          >
            <dt className={styles.label}>{row.label}</dt>
            <dd className={styles.value}>
              {Array.isArray(row.value) ? (
                <TagList
                  items={row.value}
                  label={row.label}
                  variant={row.highlight ? 'accent' : 'default'}
                />
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
