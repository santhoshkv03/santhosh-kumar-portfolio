import { Section } from '@/components/ui/Section';
import { profile } from '@/content/profile';
import styles from './Education.module.scss';

export function Education() {
  const { degree, institution, period } = profile.education;

  return (
    <Section id="education" title="Education">
      <div className={styles.entry}>
        <h3 className={styles.degree}>{degree}</h3>
        <p className={styles.institution}>{institution}</p>
        <p className={styles.period}>{period}</p>
      </div>
    </Section>
  );
}
