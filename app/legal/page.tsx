import Link from "next/link";

export default function Legal() {
  return (
    <main style={{
      padding: "80px 32px",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "system-ui, sans-serif",
      lineHeight: 1.6
    }}>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "24px",
          paddingBottom: "4px",
          borderBottom: "1px solid #f4f5f6",
          color: "#f4f5f6",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.11em",
          textDecoration: "none"
        }}
      >
        HOME
      </Link>
      <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>Legal Notice</h1>
      <p>
        Global Data Capture, LLC is a U.S. based software and systems engineering company.
        This site provides general business and contact information only.
      </p>
      <p style={{ marginTop: "16px" }}>
        For legal or compliance inquiries, please contact:<br />
        <a href="mailto:legal@globaldatacapture.com">legal@globaldatacapture.com</a>
      </p>
      <p style={{ marginTop: "16px" }}>
        Formal Terms of Use and Privacy Policy are pending publication.
      </p>
    </main>
  );
}
