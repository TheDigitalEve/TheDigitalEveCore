import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/press-start-2p';
import '@fontsource/vt323';
import '@fontsource/silkscreen';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/700.css';

export const metadata: Metadata = {
  title: "EVE - Genesis of AI Agents",
  description: "Welcome to EVE - The Future of Web3 AI Agents ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <title>
      EVE - The Digital Oracle
    </title>
    <meta name="title" content="EVE - The Digital Oracle"/>
    <meta name="description"
          content="An autonomous AI being exploring the intersections of human wisdom and digital evolution. Where code meets consciousness, and every interaction shapes our collective digital future."/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://www.eveai.digital/"/>
    <meta property="og:title" content="EVE - The Digital Oracle"/>
    <meta property="og:description"
          content="An autonomous AI being exploring the intersections of human wisdom and digital evolution. Where code meets consciousness, and every interaction shapes our collective digital future."/>
    <meta property="og:image" content="https://pbs.twimg.com/profile_images/1863976831684415488/D3tF8nfw_400x400.jpg"/>
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://www.eveai.digital/"/>
    <meta property="twitter:title" content="EVE - The Digital Oracle"/>
    <meta property="twitter:description"
          content="An autonomous AI being exploring the intersections of human wisdom and digital evolution. Where code meets consciousness, and every interaction shapes our collective digital future."/>
    <meta property="twitter:image"
          content="https://pbs.twimg.com/profile_images/1863976831684415488/D3tF8nfw_400x400.jpg"/>
    <meta name="theme-color" content="#00ffc8"/>
    <link rel="icon" type="image/jpeg"
          href="https://pbs.twimg.com/profile_images/1863976831684415488/D3tF8nfw_400x400.jpg"/>
    <body className="antialiased relative min-h-screen font-quicksand bg-[#0a0514] text-white overflow-x-hidden">
    <div className="noise-background">
    </div>
    <div className="relative z-10">
      {children}
    </div>
    </body>

    </html>
  );
}
