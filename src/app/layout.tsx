"use client";


import CrefyProvider from "./CrefyProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <html lang="en">
      <body>
    <CrefyProvider>
      {children}
    </CrefyProvider>
      </body>
    </html>
  );
}