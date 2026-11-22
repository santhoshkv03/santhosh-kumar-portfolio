import { ButtonLink } from '@/components/ui/ButtonLink';
import { profile } from '@/content/profile';
import { SpecPanel } from './SpecPanel';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            {profile.name}, {profile.role}
          </p>
          <h1 id="hero-heading" className={styles.title}>
            {profile.headline}
          </h1>
          <p className={styles.lead}>{profile.intro}</p>
          <div className={styles.actions}>
            <ButtonLink href={`mailto:${profile.email}`}>Email me</ButtonLink>
            <ButtonLink href={profile.resumeUrl} variant="secondary" download>
              Download résumé
            </ButtonLink>
          </div>
          {profile.socials.length > 0 ? (
            <ul className={styles.social} aria-label="Profiles">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <SpecPanel />
      </div>
    </section>
  );
}
