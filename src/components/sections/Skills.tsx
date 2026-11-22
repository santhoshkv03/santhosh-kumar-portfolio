import { Section } from '@/components/ui/Section';
import { TagList } from '@/components/ui/TagList';
import { profile } from '@/content/profile';
import styles from './Skills.module.scss';

export function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Grouped by what they are used for.">
      <div className={styles.groups}>
        {profile.skills.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>
              {group.title}
              {group.note ? <span className={styles.note}>{group.note}</span> : null}
            </h3>
            <TagList items={group.items} label={group.title} />
          </div>
        ))}
      </div>
    </Section>
  );
}
