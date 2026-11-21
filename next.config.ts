import type { NextConfig } from "next";

// Codespaces forwards a localhost port through a per-codespace HTTPS hostname.
// Trust only this codespace's forwarded hosts, not every *.app.github.dev host.
// Keep both 3000 (default) and 3001 (Next.js fallback when 3000 is busy).
const codespaceName = process.env.CODESPACE_NAME;
const forwardingDomain =
  process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN || "app.github.dev";
const codespaceOrigins = codespaceName
  ? [3000, 3001].map(
      (port) => `${codespaceName}-${port}.${forwardingDomain}`,
    )
  : [];

const nextConfig: NextConfig = {
  // Remotion's renderer/bundler load platform-specific native binaries at runtime.
  serverExternalPackages: ["@remotion/renderer", "@remotion/bundler"],
  ...(codespaceOrigins.length > 0
    ? {
        // Development assets and Server Actions have separate origin checks.
        allowedDevOrigins: codespaceOrigins,
        experimental: {
          serverActions: {
            allowedOrigins: codespaceOrigins,
          },
        },
      }
    : {}),
};

export default nextConfig;
