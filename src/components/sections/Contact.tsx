import { ButtonLink } from '@/components/ui/ButtonLink';
import { CopyButton } from '@/components/ui/CopyButton';
import { Section } from '@/components/ui/Section';
import { profile } from '@/content/profile';
import styles from './Contact.module.scss';

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      intro="For roles, projects or questions, email is the fastest way to reach me."
    >
      <a href={`mailto:${profile.email}`} className={styles.email}>
        {profile.email}
      </a>

      <div className={styles.actions}>
        <CopyButton value={profile.email} label="Copy email" />
        <ButtonLink href={profile.resumeUrl} variant="secondary" download>
          Download résumé
        </ButtonLink>
      </div>

      <dl className={styles.details}>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={profile.phoneHref} className={styles.link}>
              {profile.phone}
            </a>
          </dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>{profile.location}</dd>
        </div>
        {profile.socials.map((social) => (
          <div key={social.label}>
            <dt>{social.label}</dt>
            <dd>
              <a
                href={social.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
