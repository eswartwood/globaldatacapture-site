export default function Legal() {
  return (
    <main style={{
      padding: "80px 32px",
      maxWidth: "800px",
      margin: "0 auto",
      fontFamily: "system-ui, sans-serif",
      lineHeight: 1.6
    }}>
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
