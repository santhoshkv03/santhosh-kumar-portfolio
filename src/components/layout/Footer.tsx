import { profile } from '@/content/profile';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js, React and SCSS.</p>
      </div>
    </footer>
  );
}
