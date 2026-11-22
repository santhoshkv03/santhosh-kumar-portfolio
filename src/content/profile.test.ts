import { describe, expect, it } from 'vitest';
import { navItems, profile } from './profile';

describe('profile content', () => {
  it('has a valid email and a resume that exists in /public', () => {
    expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect(profile.resumeUrl).toMatch(/^\/.+\.pdf$/);
  });

  it('marks exactly one role as current and lists it first', () => {
    const current = profile.experience.filter((role) => role.current);
    expect(current).toHaveLength(1);
    expect(profile.experience[0]?.current).toBe(true);
  });

  it('gives every role unique ids, results and highlights', () => {
    const ids = profile.experience.map((role) => role.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const role of profile.experience) {
      expect(role.metrics.length).toBeGreaterThan(0);
      expect(role.highlights.length).toBeGreaterThan(0);
    }
  });

  it('lists GitHub and LinkedIn profiles', () => {
    expect(profile.socials.map((social) => social.label)).toEqual(['GitHub', 'LinkedIn']);
  });

  it('uses secure absolute URLs for social profiles', () => {
    for (const social of profile.socials) {
      expect(social.href).toMatch(/^https:\/\//);
    }
  });

  it('highlights both a frontend and a backend stack in the hero spec sheet', () => {
    const highlighted = profile.specSheet.filter((row) => row.highlight);
    expect(highlighted.map((row) => row.label)).toEqual(['frontend', 'backend']);
    for (const row of highlighted) {
      expect(Array.isArray(row.value)).toBe(true);
    }
  });

  it('keeps navigation ids unique', () => {
    const ids = navItems.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
