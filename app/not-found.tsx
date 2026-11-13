import Link from "next/link";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="wrap" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", gap: 20 }}>
      <span className="kicker">404 / Not found</span>
      <h1 className="h2">
        This route does not <span className="grad">resolve.</span>
      </h1>
      <p className="sub">The page you are looking for does not exist or has moved.</p>
      <div>
        <Link className="btn btn-p" href="/">
          Back to the portfolio
        </Link>
      </div>
    </main>
  );
}
