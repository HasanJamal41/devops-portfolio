import type { Tool } from "../data";

// Tool logos are small static SVGs; next/image adds nothing for them.
export function Logo({ src, size }: { src: string; size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" width={size} height={size} decoding="async" />;
}

// Brand logo when one exists, otherwise a small monogram badge.
export function ToolMark({ tool, size = 16 }: { tool: Tool; size?: number }) {
  if (tool.logo) return <Logo src={tool.logo} size={size} />;
  const letters = tool.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2);
  return (
    <span className="mg" aria-hidden="true">
      {letters}
    </span>
  );
}

export function Chips({ tools }: { tools: Tool[] }) {
  return (
    <div className="chips">
      {tools.map((tool) => (
        <span key={tool.name} className="chip">
          <ToolMark tool={tool} />
          {tool.name}
        </span>
      ))}
    </div>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const Icon = {
  arrow: () => (
    <svg {...stroke} strokeWidth={2}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  download: () => (
    <svg {...stroke} strokeWidth={2}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  ),
  external: () => (
    <svg {...stroke} strokeWidth={2} className="arr">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  bolt: () => (
    <svg {...stroke}>
      <path d="M13 3l-4 9h4l-1 9 7-11h-4l2-7z" />
    </svg>
  ),
  cloud: () => (
    <svg {...stroke}>
      <path d="M6.5 19a4.5 4.5 0 01-.5-8.98A6 6 0 0117.5 9h.5a4 4 0 010 8h-11z" />
    </svg>
  ),
  cube: () => (
    <svg {...stroke}>
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12l8.73-5.04M12 22.08V12" />
    </svg>
  ),
  chart: () => (
    <svg {...stroke}>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-4 3 3 6-7" />
    </svg>
  ),
  shield: () => (
    <svg {...stroke}>
      <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    </svg>
  ),
  code: () => (
    <svg {...stroke}>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  terminal: () => (
    <svg {...stroke}>
      <path d="M4 17l6-6-6-6M12 19h8" />
    </svg>
  ),
  mail: () => (
    <svg {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  chat: () => (
    <svg {...stroke}>
      <path d="M21 12a9 9 0 01-13.5 7.8L3 21l1.2-4.5A9 9 0 1121 12z" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  cap: () => (
    <svg {...stroke}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  menu: () => (
    <svg {...stroke} strokeWidth={2} width={20} height={20}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
};
