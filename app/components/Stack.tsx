import { marqueeRows, stats } from "../data";
import { Logo } from "./ui";

export function Marquee(): React.JSX.Element {
  return (
    <section className="marquee" id="stack" aria-label="Tools I work with">
      {marqueeRows.map((row, r) => (
        <div key={r} className={`track${r % 2 ? " rev" : ""}`}>
          {/* The row renders twice so the loop is seamless; the copy is hidden from screen readers. */}
          {[0, 1].map((copy) =>
            row.map((tool) => (
              <div key={`${copy}-${tool.name}`} className="tool" aria-hidden={copy === 1 || undefined}>
                <Logo src={tool.logo} size={22} />
                {tool.name}
              </div>
            ))
          )}
        </div>
      ))}
    </section>
  );
}

export function Stats(): React.JSX.Element {
  return (
    <div className="wrap stats" aria-label="Key numbers">
      {stats.map((s, i) => (
        <div key={s.label} className="stat rv" style={{ "--rd": `${i * 0.08}s` } as React.CSSProperties}>
          <div className="sv">
            <span className={`count${s.grad ? " grad" : ""}`} data-to={s.to} data-dec={s.decimals}>
              {s.to.toFixed(s.decimals)}
            </span>
            {s.suffix && <span className={s.grad ? "grad" : undefined}>{s.suffix}</span>}
          </div>
          <div className="sl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
