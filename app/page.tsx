import Link from "next/link";

export default function Page() {
  return (
    <main className="gdc-shell">
      <header className="gdc-header">
        <Link className="gdc-brand" href="/" aria-label="Global Data Capture home">
          <span className="gdc-brand-wordmark">GLOBAL DATA CAPTURE<sup>®</sup></span>
        </Link>
        <nav className="gdc-nav" aria-label="Main navigation">
          <Link href="/" className="gdc-nav-link gdc-nav-link-active" aria-current="page">
            HOME
          </Link>
          <Link href="/legal" className="gdc-nav-link">
            LEGAL
          </Link>
          <a href="https://capture.globaldatacapture.com/office" className="gdc-nav-link gdc-nav-link-active">
            GDC Capture Login
          </a>
        </nav>
      </header>

      <section className="gdc-home" aria-labelledby="gdc-home-heading">
        <div className="gdc-home-primary">
          <div className="gdc-hero-eyebrow-row">
            <span className="gdc-pill">IDENTITY SYSTEMS</span>
            <span className="gdc-pill">DIGITAL ASSET SECURITY</span>
          </div>
          <p className="gdc-hero-kicker">SOFTWARE &amp; SYSTEMS ENGINEERING</p>
          <h1 className="gdc-hero-heading" id="gdc-home-heading">
            Identity-driven tools for securing data, assets, and workflows.
          </h1>
          <p className="gdc-hero-body">
            Global Data Capture, LLC is a systems engineering firm specializing in
            identity-driven data workflows, secure digital asset packaging, and
            enterprise-grade software integrations. We design and deploy smart file
            formats, registration systems, and security-driven data tools used across
            commercial, industrial, and media environments.
          </p>

          <div className="gdc-feature-row">
            <article className="gdc-feature-card">
              <h2>Smart File Formats</h2>
              <p>
                Structured containers for certificates, media, and metadata with
                integrity and provenance built in.
              </p>
            </article>
            <article className="gdc-feature-card">
              <h2>Registration &amp; Identity</h2>
              <p>
                Tools that tie real-world entities to digital assets with verifiable,
                auditable records.
              </p>
            </article>
            <article className="gdc-feature-card">
              <h2>Enterprise Integration</h2>
              <p>
                Software integrations that plug into existing workflows, cloud
                platforms, and identity providers.
              </p>
            </article>
          </div>
        </div>

        <aside className="gdc-contact-card" aria-label="Contact information">
          <h2 className="gdc-contact-heading">CONTACT</h2>
          <p className="gdc-contact-block">
            <strong>Global Data Capture, LLC</strong>
            <br />
            521 Fifth Avenue, 17th Floor
            <br />
            New York, NY 10175-0038
          </p>
          <p className="gdc-contact-block gdc-contact-meta">
            Industry classification: Computer &amp; Network Security.
          </p>
        </aside>
      </section>

      <footer className="gdc-footer">
        <p>© 2026 Global Data Capture, LLC — New York — New Jersey — All Rights Reserved.</p>
        <a href="mailto:support@globaldatacapture.com">
          support@globaldatacapture.com
        </a>
      </footer>
    </main>
  );
}
