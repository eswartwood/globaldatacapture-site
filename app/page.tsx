export default function Page() {
  return (
    <main className="gdc-main">
      {/* ===============================
          HEADER / NAV
          =============================== */}
      <header className="gdc-header">
        {/* Big transparent LLC logo */}
        <a href="/" className="gdc-nav-brand">
          <img
            src="/gdc/gdc-logo-gold-llc.png"
            alt="Global Data Capture, LLC"
            className="gdc-nav-logo"
          />
        </a>

        <nav className="gdc-nav-links">
          <a href="/">Home</a>
          <a href="/legal">Legal</a>
        </nav>
      </header>

      {/* ===============================
          HERO CONTENT
          =============================== */}
      <section className="gdc-hero">
        <div className="gdc-hero-body">
          {/* Tag row */}
<div
  className="gdc-hero-tags"
  style={{
    display: "flex",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    gap: "0.75rem",
    flexWrap: "wrap",
  }}
>
  <span>Identity Systems</span>
  <span>Digital Asset Security</span>
</div>
<br />


          {/* Title & description */}
          <div className="gdc-hero-title">
  <h4>Software &amp; Systems Engineering</h4>
  <br />

  <h1>
    Identity-driven tools for securing data, assets, and workflows.
    <br />

  </h1>
</div>


          <p className="gdc-hero-desc">
            Global Data Capture, LLC is a systems engineering firm specializing
            in identity-driven data workflows, secure digital asset packaging,
            and enterprise-grade software integrations. We design and deploy
            smart file formats, registration systems, and security-driven data
            tools used across commercial, industrial, and media environments.
          </p>

          {/* Feature row */}
          <div className="gdc-feature-row">
            <div className="gdc-feature-card">
              <h5>Smart File Formats</h5>
              <p>
                Structured containers for certificates, media, and metadata with
                integrity and provenance built in.
              </p>
            </div>

            <div className="gdc-feature-card">
              <h5>Registration &amp; Identity</h5>
              <p>
                Tools that tie real-world entities to digital assets with
                verifiable, auditable records.
              </p>
            </div>

            <div className="gdc-feature-card">
              <h5>Enterprise Integration</h5>
              <p>
                Software integrations that plug into existing workflows, cloud
                platforms, and identity providers.
              </p>
            </div>
          </div>
        </div>

        {/* ===============================
            CONTACT CARD
            =============================== */}
        <aside className="gdc-contact-card">
          <img
            src="/gdc/gdc-logo-gold-stacked-avatar.png"
            alt="Global Data Capture, LLC"
            className="gdc-contact-logo"
          />

          <div className="gdc-contact-block">
            <h6>Contact</h6>

            <p>Global Data Capture, LLC</p>
            <p>
              521 Fifth Avenue, 17th Floor
              <br />
              New York, NY 10175-0038
            </p>

            <p>
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
      </section>

      {/* ===============================
          FOOTER
          =============================== */}
      <footer className="gdc-footer">
        © 2026 Global Data Capture, LLC — New York · New Jersey — All Rights
        Reserved.
      </footer>
    </main>
  );
}
