import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API & Developer Tools — RBOT Platform",
  description: "Build on physical AI with the RBOT REST API. Query fleet status, manage tasks, push webhooks, and integrate your WMS or ERP — one API surface across all robot manufacturers.",
};

const capabilities = [
  {
    title: "Fleet Status API",
    desc: "Query all robot positions, operational states, battery levels, and active task assignments in real time. Supports individual robot lookups, bulk fleet queries, and filtered queries by facility, zone, or status.",
  },
  {
    title: "Task API",
    desc: "Create, assign, monitor, update, and cancel tasks programmatically. Define task types, payload parameters, priority levels, and completion criteria. Build workflow automation that responds to business events in your WMS or ERP.",
  },
  {
    title: "Events & Webhooks",
    desc: "Subscribe to push notifications for any fleet event — status changes, task completions, battery alerts, fault codes, and maintenance triggers. Configure per-event webhook endpoints with retry logic and delivery guarantees.",
  },
  {
    title: "Integrations API",
    desc: "Connect your WMS, ERP, or MES to RBOT Platform without relying on pre-built connectors. The integrations API exposes bidirectional data sync endpoints for custom system connectivity with standard OAuth2 authentication.",
  },
  {
    title: "Analytics API",
    desc: "Pull fleet performance data programmatically into your own BI tools. Query utilization, task throughput, cost per task, downtime events, and historical trends. Supports time-range filters, grouping, and aggregation.",
  },
  {
    title: "Manufacturer Abstraction",
    desc: "A single API surface across all supported robot hardware types. Whether your fleet includes Fetch AMRs, Universal Robots arms, or Figure humanoids, you interact with the same API endpoints, the same data models, and the same authentication.",
  },
];

const endpoints = [
  { method: "GET",    path: "/v1/fleet/robots",              desc: "List all robots in fleet" },
  { method: "GET",    path: "/v1/fleet/robots/:id/status",   desc: "Get single robot status" },
  { method: "POST",   path: "/v1/tasks",                     desc: "Create a new task" },
  { method: "GET",    path: "/v1/tasks/:id",                 desc: "Get task status and details" },
  { method: "DELETE", path: "/v1/tasks/:id",                 desc: "Cancel an active task" },
  { method: "GET",    path: "/v1/analytics/utilization",     desc: "Query utilization metrics" },
  { method: "POST",   path: "/v1/webhooks",                  desc: "Register a webhook endpoint" },
  { method: "GET",    path: "/v1/integrations",              desc: "List active integrations" },
];

const sdks = ["Python", "Node.js", "Go"];

const methodColor: Record<string, string> = {
  GET:    "var(--acc)",
  POST:   "var(--good)",
  DELETE: "var(--warn)",
};

export default function ApiPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">API &amp; Developer Tools</span>
        <h1 className="d1">The RBOT API. Build on physical AI.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          A fully documented REST API and webhook system that lets your engineering team build custom
          dashboards, WMS integrations, and workflow automation on top of your robotic fleet.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get API Access</Link>
          <Link href="/platform/integrations" className="btn btn-g">View Integrations</Link>
        </div>
      </div>

      {/* API Documentation SVG Mockup */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="plat-shell">
            <svg
              viewBox="0 0 560 320"
              width="560"
              height="320"
              style={{ maxWidth: "100%", display: "block", borderRadius: 4 }}
              aria-label="API documentation mockup"
            >
              {/* Background */}
              <rect width="560" height="320" style={{ fill: "var(--bg)" }} />

              {/* Left sidebar — nav */}
              <rect width="148" height="320" style={{ fill: "var(--bg1)" }} />
              <rect x="148" width="1" height="320" style={{ fill: "var(--bdr)" }} />
              <text x="14" y="28" fontFamily="monospace" fontSize="10" fontWeight="700" style={{ fill: "var(--t1)" }}>RBOT API v1</text>
              <text x="14" y="50" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>REFERENCE</text>
              <text x="14" y="65" fontFamily="monospace" fontSize="10" style={{ fill: "var(--acc)" }}>Fleet</text>
              <text x="14" y="80" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Tasks</text>
              <text x="14" y="95" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Analytics</text>
              <text x="14" y="110" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Webhooks</text>
              <text x="14" y="125" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Integrations</text>
              <rect x="8" y="132" width="132" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="14" y="148" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>GUIDES</text>
              <text x="14" y="163" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Authentication</text>
              <text x="14" y="178" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Rate Limits</text>
              <text x="14" y="193" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>SDKs</text>
              <text x="14" y="208" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Webhooks Guide</text>
              <rect x="8" y="215" width="132" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="14" y="230" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>SDKS</text>
              <rect x="14" y="237" width="50" height="14" rx="2" style={{ fill: "var(--acc-bg)", stroke: "var(--acc)", strokeWidth: 0.5 }} />
              <text x="18" y="248" fontFamily="monospace" fontSize="8" style={{ fill: "var(--acc)" }}>Python</text>
              <rect x="68" y="237" width="50" height="14" rx="2" style={{ fill: "var(--bg2)" }} />
              <text x="72" y="248" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Node.js</text>
              <rect x="14" y="256" width="34" height="14" rx="2" style={{ fill: "var(--bg2)" }} />
              <text x="18" y="267" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Go</text>

              {/* Main content area */}
              {/* Endpoint bar */}
              <rect x="158" y="14" width="390" height="28" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <rect x="162" y="18" width="28" height="20" rx="2" style={{ fill: "rgba(10,174,255,0.15)" }} />
              <text x="165" y="32" fontFamily="monospace" fontSize="9" style={{ fill: "var(--acc)" }}>GET</text>
              <text x="196" y="32" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t1)" }}>/v1/fleet/robots</text>
              <rect x="492" y="19" width="50" height="18" rx="2" style={{ fill: "var(--acc)" }} />
              <text x="504" y="31" fontFamily="monospace" fontSize="9" style={{ fill: "#040404" }}>Try it</text>

              {/* Code area — Request */}
              <rect x="158" y="52" width="188" height="190" style={{ fill: "var(--bg1)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="168" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>REQUEST</text>

              {/* Line numbers + code lines */}
              {[
                { ln: "1",  code: "GET /v1/fleet/robots", color: "var(--acc)" },
                { ln: "2",  code: "Host: api.rbot.co", color: "var(--t2)" },
                { ln: "3",  code: "Authorization: Bearer {key}", color: "var(--t2)" },
                { ln: "4",  code: "Content-Type: application/json", color: "var(--t2)" },
                { ln: "5",  code: "", color: "var(--t2)" },
                { ln: "6",  code: "?status=online", color: "var(--good)" },
                { ln: "7",  code: "&facility_id=CHI-DC1", color: "var(--good)" },
                { ln: "8",  code: "&limit=50", color: "var(--good)" },
                { ln: "9",  code: "&cursor=eyJpZCI6IjEwMCJ9", color: "var(--t3)" },
              ].map((line, i) => (
                <g key={i}>
                  <text x="168" y={88 + i * 16} fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>{line.ln}</text>
                  <text x="180" y={88 + i * 16} fontFamily="monospace" fontSize="8" style={{ fill: line.color }}>{line.code}</text>
                </g>
              ))}

              {/* Code area — Response */}
              <rect x="350" y="52" width="198" height="190" style={{ fill: "var(--bg1)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="360" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>RESPONSE 200 OK</text>
              <circle cx="514" cy="66" r="4" style={{ fill: "var(--good)" }} />

              {/* JSON response lines */}
              {[
                { ln: "1",  code: "{", color: "var(--t1)" },
                { ln: "2",  code: '  "robots": [', color: "var(--t1)" },
                { ln: "3",  code: "    {", color: "var(--t1)" },
                { ln: "4",  code: '      "id": "RBT-0041",', color: "var(--t2)" },
                { ln: "5",  code: '      "status": "in_task",', color: "var(--good)" },
                { ln: "6",  code: '      "battery": 82,', color: "var(--acc)" },
                { ln: "7",  code: '      "location": {', color: "var(--t1)" },
                { ln: "8",  code: '        "zone": "A-12"', color: "var(--good)" },
                { ln: "9",  code: "      }", color: "var(--t1)" },
                { ln: "10", code: "    }", color: "var(--t1)" },
                { ln: "11", code: "  ]", color: "var(--t1)" },
              ].map((line, i) => (
                <g key={i}>
                  <text x="360" y={88 + i * 14} fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>{line.ln}</text>
                  <text x="374" y={88 + i * 14} fontFamily="monospace" fontSize="7" style={{ fill: line.color }}>{line.code}</text>
                </g>
              ))}

              {/* Bottom bar */}
              <rect x="158" y="252" width="390" height="28" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="168" y="270" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Rate limit: 1,000 req/min  ·  Response time: 42ms  ·  Uptime: 99.98%</text>
              <rect x="470" y="258" width="72" height="16" rx="2" style={{ fill: "var(--bg3)" }} />
              <text x="476" y="270" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>View Schema →</text>

              {/* Pagination bar */}
              <rect x="158" y="285" width="390" height="28" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="168" y="303" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>cursor: "eyJpZCI6IjUwIn0"  ·  total: 127  ·  page: 1 of 3</text>
              <rect x="490" y="291" width="52" height="16" rx="2" style={{ fill: "var(--bg3)" }} />
              <text x="498" y="303" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>Next →</text>
            </svg>
          </div>
        </div>
      </section>

      {/* API Overview */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">API Overview</span>
                <h2 className="d2">Build on RBOT Platform without limits.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                The RBOT API is a fully documented REST API that gives your engineering team programmatic access
                to every capability of the RBOT Platform. Query fleet status in real time, create and assign tasks
                from your WMS or ERP, subscribe to webhook events for any fleet activity, and pull analytics data
                into your own BI tools. The API is the same surface that powers the RBOT Platform dashboard —
                everything you can see in the UI, your code can access too. The base URL is
                <code style={{ fontFamily: "monospace", color: "var(--acc)", marginLeft: 4 }}>api.rbot.co/v1</code>.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                The API supports two authentication methods: API keys for server-to-server integrations and
                OAuth2 with PKCE for user-facing applications. API keys are scoped at the resource level —
                a key can be granted read-only fleet access, task management permissions, webhook administration,
                or full platform access. This makes it safe to issue narrow-scoped keys to third-party systems
                like your WMS without granting access to billing or administrative functions. All API requests
                are authenticated via the <code style={{ fontFamily: "monospace", color: "var(--acc)" }}>Authorization: Bearer</code> header.
              </p>
              <p className="body">
                Beyond the platform API, RBOT publishes webhooks for all fleet events — enabling event-driven
                architectures where your systems react to robot activity in real time rather than polling for
                updates. Webhook payloads include the full event context, a delivery timestamp, and a HMAC
                signature for payload verification. Webhook delivery is guaranteed with exponential backoff
                retry logic and a 72-hour retry window for failed deliveries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Capabilities */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">API Capabilities</span>
            <h2 className="d2">Every platform feature, accessible via API.</h2>
          </div>
          <div className="ind-grid">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Endpoint Reference</span>
            <h2 className="d2">Core API endpoints.</h2>
          </div>
          <div style={{
            background: "var(--bg1)",
            border: "1px solid var(--bdr2)",
            borderRadius: 3,
            marginTop: 40,
            overflow: "hidden",
          }}>
            <div style={{
              padding: "10px 20px",
              background: "var(--bg2)",
              borderBottom: "1px solid var(--bdr)",
              fontFamily: "monospace",
              fontSize: 11,
              color: "var(--t3)",
              letterSpacing: ".06em",
            }}>
              RBOT REST API · api.rbot.co/v1
            </div>
            {endpoints.map((ep, i) => (
              <div
                key={ep.path}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr 1fr",
                  gap: 16,
                  padding: "14px 20px",
                  borderBottom: i < endpoints.length - 1 ? "1px solid var(--bdr)" : undefined,
                  alignItems: "center",
                }}
              >
                <span style={{
                  fontFamily: "monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  color: methodColor[ep.method] ?? "var(--t2)",
                  background: `${methodColor[ep.method] ?? "var(--t2)"}15`,
                  padding: "3px 8px",
                  borderRadius: 2,
                  textAlign: "center",
                }}>
                  {ep.method}
                </span>
                <code style={{ fontFamily: "monospace", fontSize: 13, color: "var(--t1)" }}>{ep.path}</code>
                <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--t3)" }}>{ep.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">SDKs Available</span>
                <h2 className="d2">Official client libraries for every stack.</h2>
              </div>
              <div className="chips" style={{ marginTop: 8 }}>
                {sdks.map(sdk => (
                  <span key={sdk} className="ichip" style={{ fontSize: 14, padding: "10px 22px" }}>{sdk}</span>
                ))}
              </div>
              <p className="body" style={{ marginTop: 24 }}>
                All RBOT SDKs are open source and published to their respective package registries — PyPI for
                Python, npm for Node.js, and pkg.go.dev for Go. SDKs are auto-generated from the OpenAPI
                specification, so they are always in sync with the latest API surface. Each SDK includes
                authentication handling, automatic retry logic, type definitions, and inline documentation.
              </p>
            </div>
            <div>
              <div className="sec-hd">
                <span className="lbl">Rate Limits &amp; SLAs</span>
                <h2 className="d2">Built for production workloads.</h2>
              </div>
              <p className="body" style={{ marginBottom: 20 }}>
                The RBOT API enforces rate limits per API key to ensure fair access and platform stability.
                Standard tier keys are limited to 1,000 requests per minute and 2 million requests per day.
                Enterprise tier keys are limited to 10,000 requests per minute with custom daily caps and
                dedicated capacity. Rate limit headers are included in every response so your application can
                track consumption and implement adaptive backoff without guesswork. The API uses a sliding
                window rate limiter, so short bursts are handled gracefully without triggering unnecessary errors.
              </p>
              <p className="body">
                The RBOT API is covered by the same 99.9% uptime SLA as the platform. In the event of a
                platform incident, all API responses will include an
                <code style={{ fontFamily: "monospace", color: "var(--acc)", marginLeft: 4 }}>X-RBOT-Degraded</code> header
                indicating which services are affected. Webhook delivery SLAs guarantee delivery within 30
                seconds of event occurrence for all enterprise-tier customers, with automated escalation
                for failed delivery queues. Full historical uptime data is published at
                <code style={{ fontFamily: "monospace", color: "var(--acc)", marginLeft: 4 }}>status.rbot.co</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Ready to build on physical AI?</h2>
          <p className="body-lg">
            API access is included in all RBOT Platform subscriptions. Request your assessment to get
            access credentials and a dedicated API onboarding session with our solutions engineering team.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Get API Access</Link>
            <Link href="/platform" className="btn btn-g">Platform Overview</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
