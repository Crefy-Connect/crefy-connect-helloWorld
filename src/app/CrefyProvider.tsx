"use client";

import { CrefyProvider, useAuth, type SocialLogins } from "crefy-connect";
import "../../node_modules/crefy-connect/dist/index.css";

const socialLogins: SocialLogins = {
  google: false,
  github: false,
  discord: false,
  telegram: false,
  twitter: false,
  wallet: false,
  email: true,
  phone: false,
};

const config = {
  socialLogins,
  crefyId: "c611fc769a5e62517056718d0282b320a07a4ca6792ce459db2220c3892fe984",
  appearance: {
    primaryColor: "#000000",
    secondaryColor: "#000000",
  },
};

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang="en">
      <body>
    <CrefyProvider config={config}>
      {children}
    </CrefyProvider>
      </body>
    </html>
  );
}