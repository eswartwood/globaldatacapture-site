// app/page.tsx

export default function Page() {
  return (
    <section className="gdc-main">
      <div className="gdc-hero">
        {/* Left: main content */}
        <div className="gdc-hero-body">
          {/* Tag row – matches .gdc-hero-tags in CSS */}
          <div className="gdc-hero-tags">
            <span>Identity Systems</span>
            <span>Digital Asset Security</span>
          </div>

          {/* Title & subtitle – wrapper matches .gdc-hero-title in CSS */}
          <div className="gdc-hero-title">
            <h4>Software &amp; Systems Engineering</h4>

            <h1>
              Identity-driven tools for securing data, assets, and workflows.
            </h1>
          </div>

          <p className="gdc-hero-desc">
            Global Data Capture, LLC is a systems engineering firm specializing
            in identity-driven data workflows, secure digital asset packaging,
            and enterprise-grade software integrations. We design and deploy
            smart file formats, registration systems, and security-driven data
            tools used across commercial, industrial, and media environments.
          </p>

          {/* Feature cards */}
          <div className="gdc-grid">
            <article className="gdc-card">
              <h3 className="gdc-card-title">Smart File Formats</h3>
              <p className="gdc-card-body">
                Structured containers for certificates, media, and metadata with
                integrity and provenance built in.
              </p>
            </article>

            <article className="gdc-card">
              <h3 className="gdc-card-title">Registration &amp; Identity</h3>
              <p className="gdc-card-body">
                Tools that tie real-world entities to digital assets with
                verifiable, auditable records.
              </p>
            </article>

            <article className="gdc-card">
              <h3 className="gdc-card-title">Enterprise Integration</h3>
              <p className="gdc-card-body">
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
    </section>
  );
}
