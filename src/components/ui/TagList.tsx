import clsx from 'clsx';
import styles from './TagList.module.scss';

interface TagListProps {
  items: readonly string[];
  label: string;
  variant?: 'default' | 'accent';
}

export function TagList({ items, label, variant = 'default' }: TagListProps) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item} className={clsx(styles.tag, variant === 'accent' && styles.accent)}>
          {item}
        </li>
      ))}
    </ul>
  );
}
