"use client";

import { useState } from "react";

// One-click copy for recruiters who paste the address into an ATS or their own mail client.
export default function CopyEmail({ email }: { email: string }): React.JSX.Element {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" className="copy" onClick={copy} aria-live="polite">
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="#3DF5A6" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 012-2h10" />
        </svg>
      )}
      {copied ? "Email copied" : "Copy email"}
    </button>
  );
}
