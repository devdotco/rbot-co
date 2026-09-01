import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "RBOT — Physical AI Infrastructure", template: "%s | RBOT" },
  description: "Deploy intelligent robots across your facilities without building a robotics team internally. RBOT helps you source, integrate, manage, and finance physical AI systems from leading manufacturers.",
  keywords: ["robotics", "physical AI", "robot deployment", "warehouse automation", "humanoid robots", "AMR", "robotics-as-a-service"],
  openGraph: {
    title: "RBOT — Physical AI Infrastructure",
    description: "Put AI to Work in the Physical World.",
    siteName: "RBOT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ fontFamily: "var(--font-sans)" }}>
      <body className={inter.variable}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
