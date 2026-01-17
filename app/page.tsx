// app/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <main className="gdc-page">
      <section className="gdc-window">

      
          <nav className="gdc-nav">
            <Link href="/" className="gdc-nav-link">Home</Link>
            <Link href="/legal" className="gdc-nav-link">Legal</Link>
          </nav>
        </div>

        {/* HERO */}
        <div className="gdc-hero">
          <img
            src="/gdc/gdc-logo-primary.png"
            alt="Global Data Capture, LLC"
            className="gdc-logo-main"
          />
        </div>

        <p className="gdc-tagline">
          Software & Systems Engineering
        </p>

        <hr className="gdc-divider" />

        {/* CONTACT */}
        <div className="gdc-contact">
          <p>521 Fifth Avenue, 17th Floor</p>
          <p>New York, NY 10175-0038</p>
          <p>support@globaldatacapture.com</p>
          <p>(888) 501-4099</p>
        </div>

      </section>
    </main>
  );
}

