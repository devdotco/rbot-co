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

        {/* The Phony chat agent, answering from rbot.co's own crawled
            corpus rather than a shared one.

            The key is public by design — it is in every visitor's page source,
            and the property's allowed-origins list on phony.erp.io is what
            restricts where the widget runs.

            The host MUST be phony.erp.io, not app.erp.io/phony. The tag derives
            its API endpoint from the ORIGIN of this src, so a path-mounted URL
            silently loses the /phony prefix: every call goes to app.erp.io,
            /api/w/session 404s, and the widget never draws — no console error
            and nothing logged at either end.

            A plain script rather than next/script: the tag reads
            `document.currentScript` to find its own key and origin, so data-key
            has to sit on the element the browser actually executes.

            Behaviour — the five second delay before the panel opens on desktop,
            never on mobile, and the privacy and terms links under the composer
            — is configured on the property, not here, so it changes without a
            deploy. */}
        <script async src="https://phony.erp.io/sdr.js" data-key="pk_faf4ec4c2327dd6ab42ba23f8c8ffd51" />
      </body>
    </html>
  );
}
