import Navbar from "@/components/Navbar";
import "./global.css";
import localFont from "@next/font/local";

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
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head></head>
      <body
        className={`${Avenir.variable} font-sans min-h-[100vh] px-2 !mx-auto bg-[#393E46] text-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
