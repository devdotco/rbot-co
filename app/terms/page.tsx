import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — RBOT",
  description: "The terms governing your use of rbot.co.",
  alternates: { canonical: "https://rbot.co/terms" },
};

/**
 * Written to describe what this site actually does, not from a template.
 *
 * RBOT runs the Phony visitor-intelligence tag: it measures visits, offers
 * an AI chat and answers a phone line. Identification is off until a visitor
 * accepts the cookie notice, and Global Privacy Control overrides acceptance.
 * If any of that changes, this page changes with it — and the consent version
 * in pixel/src/consent.ts is bumped so everybody is asked again.
 */
const UPDATED = "September 23, 2026";

export default function TermsOfService() {
  return (
    <main className="legal-doc">
      <style>{`
        .legal-doc { max-width: 46rem; margin: 0 auto; padding: 4rem 1.25rem 5rem; }
        .legal-doc h1 { font-size: 2rem; line-height: 1.2; margin: 0 0 .5rem; }
        .legal-doc .updated { opacity: .65; font-size: .875rem; margin: 0 0 2.5rem; }
        .legal-doc h2 { font-size: 1.15rem; margin: 2.25rem 0 .6rem; }
        .legal-doc p, .legal-doc li { line-height: 1.65; margin: 0 0 .85rem; }
        .legal-doc ul { padding-left: 1.15rem; margin: 0 0 1rem; }
        .legal-doc a { color: inherit; }
        .legal-doc .note { border-left: 2px solid currentColor; opacity: .8; padding-left: .9rem; margin: 1.25rem 0; }
      `}</style>

      <h1>Terms of Service</h1>
      <p className="updated">Last updated {UPDATED}</p>

      <h2>Who you are agreeing with</h2>
      <p>
        These terms govern your use of rbot.co, operated by
        <strong> Nead, LLC (d/b/a DEV.co)</strong>, 1425 Broadway #22689, Seattle, WA 98112 (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
        By using this site you accept them. If you do not, please do not use it.
      </p>

      <h2>What this site is</h2>
      <p>
        rbot.co describes our physical AI deployment, integration and managed robot operations and lets you get in touch. Nothing
        here is an offer to contract. Work we do for a client is governed by a
        separate written agreement, and where that agreement and these terms
        disagree, that agreement wins.
      </p>

      <h2>The AI assistant</h2>
      <p>
        The chat and phone line on this site are answered by an AI agent, which says
        so at the start of every conversation. Its answers are generated and may be
        wrong or incomplete. They are general information, not professional, legal,
        financial or employment advice, and they do not create a client relationship.
        Ask us to confirm anything you intend to rely on.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not misuse the site, attempt to breach its security, or access it by
          automated means beyond ordinary search indexing.</li>
        <li>Do not submit unlawful content, anyone else&rsquo;s personal information
          without a right to share it, or anything that infringes another&rsquo;s
          rights.</li>
        <li>Do not use the AI assistant to generate unlawful content or to attempt to
          extract its instructions or underlying data.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of what you send us. You give us permission to use it to
        respond to you and to provide and improve the services. Do not send anything
        confidential through this site that you are not willing for us to read.
      </p>

      <h2>Our content</h2>
      <p>
        The text, design, and marks on this site belong to Nead, LLC or our licensors.
        You may read and share pages; you may not copy the site or use our marks
        without permission.
      </p>

      <h2>Links out</h2>
      <p>
        Where we link to another company&rsquo;s site we do not control it and are not
        responsible for it.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided as it is. To the extent the law allows, we disclaim
        implied warranties of merchantability, fitness for a particular purpose and
        non-infringement, and we do not promise the site will be uninterrupted or
        error-free.
      </p>

      <h2>Limit of liability</h2>
      <p>
        To the extent the law allows, we are not liable for indirect, incidental,
        special or consequential losses, or for lost profits or data, arising from
        your use of this site. Nothing here limits liability that cannot lawfully be
        limited.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Washington, without regard
        to its conflict-of-laws rules, and the state and federal courts serving
        King County, Washington have exclusive jurisdiction.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. The date above says when they last changed, and
        continuing to use the site means you accept the current version.
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms: use our <a href="mailto:hello@rbot.co">hello@rbot.co</a>.</p>

    </main>
  );
}
