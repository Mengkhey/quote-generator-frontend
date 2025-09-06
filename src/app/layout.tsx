import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Quote Generator",
  description: "Discover inspiring quotes",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
              <Navbar />
        <main className="pt-20">{children}</main> 
        {/* pt-20 adds spacing so content is not hidden behind navbar */}
        
      </body>

    </html>
  );
}
