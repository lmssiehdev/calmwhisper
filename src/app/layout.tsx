import Navbar from "@/components/Navbar";
import "./global.css";
import localFont from "@next/font/local";
import { AnalyticsWrapper } from "@/components/Analytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calm Whisper: Ambient Sounds for Deep Focus",
  description:
    "Free online background noise generator to help you focus, study, and sleep.",
  openGraph: {
    type: "website",
    url: "https://calmwhisper.com",
    title: "Calm Whisper",
    images: [{ url: "/public/images/og.jpg" }],
  },
};

const Avenir = localFont({
  variable: "--font-avenir",
  src: [
    {
      path: "../../public/fonts/Avenir_Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Avenir_Bold.ttf",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${Avenir.variable} font-sans px-2 !mx-auto bg-[#393E46] bg-background text-white relative max-w-screen-lg min-h-screen w-full `}
      >
        <Navbar />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
