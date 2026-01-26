// app/page.tsx

export default function Page() {
  return (
    <section className="gdc-main">
      {/* Header / top bar */}
      <header className="gdc-header">
        <div className="gdc-logo-row">
          <span className="gdc-logo-text">GLOBAL DATA CAPTURE, LLC</span>
        </div>
        <nav className="gdc-nav">
          <a href="/">Home</a>
          <a href="/legal">Legal</a>
        </nav>
      </header>

      {/* Main content two-column layout */}
      <div className="gdc-hero">
        {/* Left: hero + cards */}
        <div className="gdc-hero-body">
          <div className="gdc-tag-row">
            <span>Identity Systems</span>
            <span>Digital Asset Security</span>
          </div>

          <h4 className="gdc-hero-kicker">Software &amp; Systems Engineering</h4>

          <h1 className="gdc-hero-title">
            Identity-driven tools for securing data, assets, and workflows.
          </h1>

          <p className="gdc-hero-desc">
            Global Data Capture, LLC is a systems engineering firm specializing
            in identity-driven data workflows, secure digital asset packaging,
            and enterprise-grade software integrations. We design and deploy
            smart file formats, registration systems, and security-driven data
            tools used across commercial, industrial, and media environments.
          </p>

          <div className="gdc-grid">
            <article className="gdc-card">
              <h3>Smart File Formats</h3>
              <p>
                Structured containers for certificates, media, and metadata with
                integrity and provenance built in.
              </p>
            </article>

            <article className="gdc-card">
              <h3>Registration &amp; Identity</h3>
              <p>
                Tools that tie real-world entities to digital assets with
                verifiable, auditable records.
              </p>
            </article>

            <article className="gdc-card">
              <h3>Enterprise Integration</h3>
              <p>
                Software integrations that plug into existing workflows, cloud
                platforms, and identity providers.
              </p>
            </article>
          </div>
        </div>

        {/* Right: contact card */}
        <aside className="gdc-contact-card">
          <div className="gdc-contact-body">
            <h2 className="gdc-contact-title">Contact</h2>

            <p className="gdc-contact-line">
              Global Data Capture, LLC
              <br />
              521 Fifth Avenue, 17th Floor
              <br />
              New York, NY 10175-0038
            </p>

            <p className="gdc-contact-line">
              <a href="mailto:support@globaldatacapture.com">
                support@globaldatacapture.com
              </a>
              <br />
              (888) 501-4099
            </p>

            <p className="gdc-contact-foot">
              Industry classification: Computer &amp; Network Security.
            </p>
          </div>
        </aside>
      </div>

      {/* Single footer */}
      <footer className="gdc-footer">
        <p>
          © 2026 Global Data Capture, LLC — New York, New Jersey — All Rights
          Reserved.
        </p>
        <p className="gdc-footer-links">
          <a href="/legal">Legal &amp; Compliance</a>
          <span>•</span>
          <a href="mailto:support@globaldatacapture.com">
            support@globaldatacapture.com
          </a>
          <span>•</span>
          <span>(888) 501-4099</span>
        </p>
      </footer>
    </section>
  );
}
