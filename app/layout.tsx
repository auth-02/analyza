import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Analyza",
  description: "All about data: From Raw Data to Refined Insights: Extract. Structure. Insights. Visualize. Analyze. Customize.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="http://localhost:3000/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );  
}
