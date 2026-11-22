import { Section } from '@/components/ui/Section';
import { profile } from '@/content/profile';
import styles from './About.module.scss';

export function About() {
  return (
    <Section id="about" title="About" intro="What I work on and how I like to work.">
      <div className={styles.summary}>
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className={styles.principles}>
        {profile.principles.map((principle) => (
          <li key={principle.title} className={styles.principle}>
            <h3 className={styles.principleTitle}>{principle.title}</h3>
            <p className={styles.principleText}>{principle.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
