import type { Metadata } from "next";
import "./globals.css";
import { Inria_Serif } from "next/font/google";


export const metadata: Metadata = {
  title: "48 Hours | Next Gen AI Powered News App",
  description: "Created by Saumya Kanti Sarma, using Next.js :)",
  openGraph: {
    title: "48 Hours",
    description: "Next Gen AI Powered News App",
    images: [
      {
        url: "./main-logo.svg",
      },
    ],
  },
};

export const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inriaSerif.className}>
        {children}
      </body>
    </html>
  );
}
