import path from 'node:path';
import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

// GitHub Pages serves plain static files, so it needs a static export. This is opt-in
// (the deploy workflow sets GITHUB_PAGES=true); Vercel and `npm run dev` are unaffected.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Lets any SCSS file write `@use 'abstracts' as *;` instead of long relative paths.
  sassOptions: { loadPaths: [path.join(process.cwd(), 'src/styles')] },
  ...(isGitHubPages
    ? {
        output: 'export',
        // Project sites live at https://<user>.github.io/<repo>, so assets need that prefix.
        basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
        images: { unoptimized: true },
      }
    : {
        // Custom response headers need a server, so they are skipped for the static export.
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
