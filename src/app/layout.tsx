import Navbar from "@/components/Navbar";
import "./global.css";
import localFont from "@next/font/local";
import { AnalyticsWrapper } from "@/components/Analytics";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calm Whisper: Ambient Sounds for Deep Focus",
  description:
    "Free online background noise generator to help you focus, study, and sleep.",
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body
        className={`${Avenir.variable} font-sans px-2 !mx-auto bg-[#393E46] text-white relative`}
      >
        <div className="flex flex-col min-h-[100vh]">{children}</div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
