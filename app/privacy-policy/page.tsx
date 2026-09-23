import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — RBOT",
  description: "How RBOT collects, uses and protects your information, and the choices you have.",
  alternates: { canonical: "https://rbot.co/privacy-policy" },
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

export default function PrivacyPolicy() {
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

      <h1>Privacy Policy</h1>
      <p className="updated">Last updated {UPDATED}</p>

      <h2>Who we are</h2>
      <p>
        rbot.co is operated by <strong>Nead, LLC (d/b/a DEV.co)</strong>, 1425 Broadway #22689, Seattle, WA 98112. We
        provide physical AI deployment, integration and managed robot operations. This policy explains what we collect when you visit
        this site or talk to us, why, and what you can do about it. It sits
        alongside our <Link href="/terms">Terms of Service</Link>.
      </p>

      <h2>What you give us</h2>
      <p>
        When you submit a form, chat with us, or call, we receive what you choose
        to send: typically your name, email address, phone number and whatever you
        write or say. Chat and call transcripts are stored so we can follow up and
        so we can review the quality of our own answers.
      </p>

      <h2>What we collect automatically</h2>
      <ul>
        <li>Pages viewed, time on page, and how you arrived (referring site and
          campaign parameters).</li>
        <li>Browser and device details — user agent, language, screen size, time
          zone — and a score estimating whether the visit is automated.</li>
      </ul>

      <h2>What we collect only if you agree</h2>
      <p>
        Until you accept the cookie notice, we do not store your IP address or any
        device signature, and we make no attempt to recognise you. If you accept:
      </p>
      <ul>
        <li>We store a signature derived from your browser so a return visit can be
          joined to an earlier one.</li>
        <li>We look up the <em>organisation</em> that owns the network address your
          visit came from, using public internet registry data. This identifies a
          company, never an individual, and we do not treat it as identifying you.</li>
      </ul>
      <p className="note">
        If your browser sends a Global Privacy Control signal, we treat that as a
        refusal and it overrides an earlier acceptance. You can change your answer
        at any time by clearing this site&rsquo;s cookies.
      </p>

      <h2>AI chat and calls</h2>
      <p>
        The chat on this site and the phone line are answered by an AI agent. It
        tells you so at the start of every conversation. Calls are not recorded
        unless you are told otherwise at the time. A person may read a transcript
        afterwards, and may reply to you directly.
      </p>

      <h2>Business contact detail we append</h2>
      <p>
        If you give us a business email address, we may ask a third-party business
        data provider for related professional information — typically a job title,
        employer and public professional profile — so we can respond usefully. We do
        not buy consumer data, and we do not attempt to attach a name to an
        anonymous visit.
      </p>

      <h2>Cookies and similar storage</h2>
      <ul>
        <li><strong>Consent record.</strong> One cookie stores your answer to the
          cookie notice, for six months. It records a yes or a no and nothing else.</li>
        <li><strong>Session.</strong> A short-lived identifier, kept for the browser
          session, ties the pages of one visit together.</li>
        <li><strong>Measurement.</strong> Where enabled, analytics cookies help us
          understand which pages are useful.</li>
      </ul>

      <h2>Who else processes it</h2>
      <p>
        We use service providers to run this site and answer you: hosting and
        network protection, AI model providers for the chat and voice agent, speech
        transcription and synthesis, a telephony carrier, a business data provider
        for the enrichment described above, email delivery, and our own customer
        records system. They act on our instructions. We do not sell your personal
        information, and we do not share it for cross-context behavioural
        advertising.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Enquiries and the conversations attached to them are kept for as long as we
        have a business relationship and for a reasonable period afterwards.
        Analytics data about visits is kept in aggregate. Ask us to delete yours and
        we will, unless we are required to keep it.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct,
        delete or port your personal information, to object to or restrict how we
        use it, and to withdraw consent. California residents have the rights to
        know, delete, correct and to opt out of sale or sharing — we do neither, and
        we honour Global Privacy Control. We will not treat you differently for
        exercising any of these.
      </p>
      <p>To make a request, use our <a href="mailto:hello@rbot.co">hello@rbot.co</a> or write to Nead, LLC at 1425 Broadway #22689, Seattle, WA 98112.</p>

      <h2>Children</h2>
      <p>
        This site is for business use and is not directed at children under 16. We do
        not knowingly collect their information.
      </p>

      <h2>Changes</h2>
      <p>
        If we widen what we collect, we update this page and ask everybody for consent
        again rather than carrying forward a permission given for something narrower.
      </p>

    </main>
  );
}
