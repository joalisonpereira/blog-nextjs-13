import { type ReactNode } from "react";

export const metadata = {
  title: "Blog NextJS 13",
  description: "Blog homepage creating using NextJS 13",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
