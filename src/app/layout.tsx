import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Forum",
  description: "Generated by create next app",
  icons: {
    icon: '/storage/img/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header isLoggedIn={false} />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}
