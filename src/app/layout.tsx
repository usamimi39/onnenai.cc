import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ['latin'],
});

const renner = localFont({
  src: [
    {
      path: '../../public/fonts/Renner_400_Book.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-renner',
})

export const metadata: Metadata = {
  title: "Portfolio | Onnenai",
  description: "Welcome to Onnenai's portfolio website.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${renner.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
