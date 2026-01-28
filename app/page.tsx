// app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <main className="gdc-shell">
      {/* HEADER */}
      <header className="gdc-header">
        <div className="gdc-brand">
          <Image
            src="/gdc/gdc-mark-gold.png"
            alt="Global Data Capture, LLC mark"
            width={75}
            height={75}
            className="gdc-brand-mark"
          />
          <span className="gdc-brand-wordmark">GLOBAL DATA CAPTURE, LLC</span>
        </div>

        <nav className="gdc-nav">
          <a href="/" className="gdc-nav-link gdc-nav-link-active">
            HOME
          </a>
          <a href="/legal" className="gdc-nav-link">
            LEGAL
          </a>
        </nav>
      </header>

      {/* HERO + CONTACT ROW */}
      <section className="gdc-main-row">
        {/* LEFT: HERO PANEL */}
        <section className="gdc-hero-card" aria-label="Global Data Capture overview">
          <div className="gdc-hero-eyebrow-row">
            <span className="gdc-pill">IDENTITY SYSTEMS</span>
            <span className="gdc-pill">DIGITAL ASSET SECURITY</span>
          </div>

          <p className="gdc-hero-kicker">SOFTWARE &amp; SYSTEMS ENGINEERING</p>

          <h1 className="gdc-hero-heading">
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
              <h3>Smart File Formats</h3>
              <p>
                Structured containers for certificates, media, and metadata with
                integrity and provenance built in.
              </p>
            </article>

            <article className="gdc-feature-card">
              <h3>Registration &amp; Identity</h3>
              <p>
                Tools that tie real-world entities to digital assets with verifiable,
                auditable records.
              </p>
            </article>

            <article className="gdc-feature-card">
              <h3>Enterprise Integration</h3>
              <p>
                Software integrations that plug into existing workflows, cloud
                platforms, and identity providers.
              </p>
            </article>
          </div>
        </section>

        {/* RIGHT: CONTACT CARD */}
        <aside
          className="gdc-contact-card"
          aria-label="Global Data Capture contact information"
        >
          <div className="gdc-contact-logo-wrap">
            <Image
              src="/gdc/gdc-logo-gold-stacked-avatar.png"
              alt="Global Data Capture, LLC logo"
              width={250}
              height={250}
              className="gdc-contact-logo"
            />
          </div>

          <h4 className="gdc-contact-heading">CONTACT</h4>

          <p className="gdc-contact-block">
            <strong>Global Data Capture, LLC</strong>
            <br />
            521 Fifth Avenue, 17th Floor
            <br />
            New York, NY 10175-0038
          </p>

          <p className="gdc-contact-block">
            <a href="mailto:support@globaldatacapture.com">
              support@globaldatacapture.com
            </a>
            <br />
            <a href="tel:+18885014099">(888) 501-4099</a>
          </p>

          <p className="gdc-contact-block gdc-contact-meta">
            Industry classification: Computer &amp; Network Security.
          </p>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="gdc-footer">
        © 2026 Global Data Capture, LLC — New York — New Jersey — All Rights Reserved.
      </footer>
    </main>
  );
}
