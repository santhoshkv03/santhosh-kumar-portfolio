import { profile } from '@/content/profile';
import { siteConfig } from '@/lib/site';

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: siteConfig.url,
    email: `mailto:${profile.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
    alumniOf: profile.education.institution,
    worksFor: { '@type': 'Organization', name: profile.experience[0]?.company },
    knowsAbout: ['React', 'TypeScript', 'Next.js', 'Component libraries', 'Web accessibility'],
    sameAs: profile.socials.map((social) => social.href),
  };

  // Escape "<" so the JSON can never close the script tag.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
