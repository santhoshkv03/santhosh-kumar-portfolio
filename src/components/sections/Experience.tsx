import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/TagList';
import { profile } from '@/content/profile';
import styles from './Experience.module.scss';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="Three roles, most recent first, with measured results."
    >
      <div className={styles.list}>
        {profile.experience.map((role) => {
          const titleId = `role-${role.id}`;
          return (
            <article key={role.id} className={styles.role} aria-labelledby={titleId}>
              <div className={styles.meta}>
                <p className={styles.period}>{role.period}</p>
                <p>{role.location}</p>
              </div>

              <div className={styles.content} data-current={role.current ? 'true' : undefined}>
                <h3 id={titleId} className={styles.title}>
                  {role.title}
                </h3>
                <p className={styles.company}>{role.company}</p>

                <p className={styles.project}>
                  <strong>{role.project.name}.</strong> {role.project.summary}
                </p>

                <ul
                  className={styles.metrics}
                  aria-label="Key results"
                  data-count={role.metrics.length}
                >
                  {role.metrics.map((metric) => (
                    <li key={metric.label} className={styles.metric}>
                      <strong className={styles.metricValue}>{metric.value}</strong>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </li>
                  ))}
                </ul>

                <ul className={styles.highlights}>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <TagList items={role.stack} label={`Tech stack at ${role.company}`} />
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
