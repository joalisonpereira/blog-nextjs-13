import { type ReactNode } from "react";
import "src/styles/globals.css";
import { Montserrat } from "next/font/google";
import Header from "src/components/Header";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blog NextJS 13",
    template: "Blog NextJS 13 - %s",
  },
  description: "Blog homepage creating using NextJS 13",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
