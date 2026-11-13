import { marqueeRows, stackGroups } from "../data";
import { Chips, ToolMark } from "./ui";

export function Marquee(): React.JSX.Element {
  return (
    <section className="marquee" aria-label="Tools I work with">
      {marqueeRows.map((row, r) => (
        <div key={r} className={`track${r % 2 ? " rev" : ""}`}>
          {/* The row renders twice so the loop is seamless; the copy is hidden from screen readers. */}
          {[0, 1].map((copy) =>
            row.map((tool) => (
              <div key={`${copy}-${tool.name}`} className="tool" aria-hidden={copy === 1 || undefined}>
                <ToolMark tool={tool} size={22} />
                {tool.name}
              </div>
            ))
          )}
        </div>
      ))}
    </section>
  );
}

export function StackMatrix(): React.JSX.Element {
  const total = stackGroups.reduce((n, g) => n + g.tools.length, 0);
  return (
    <section className="wrap sec" id="stack">
      <div className="head">
        <div>
          <span className="kicker">04 / Tech stack</span>
          <h2 className="h2 rv">
            The full toolchain, <span className="grad">organized by layer.</span>
          </h2>
        </div>
        <p className="sub rv">{total} tools I have used to build, ship, secure and operate production systems.</p>
      </div>
      <div className="matrix">
        {stackGroups.map((g, i) => (
          <article
            key={g.title}
            className="spot group rv"
            style={{ "--rd": `${(i % 3) * 0.06}s` } as React.CSSProperties}
          >
            <div className="ghead">
              <h3>{g.title}</h3>
              <span>{String(g.tools.length).padStart(2, "0")}</span>
            </div>
            <Chips tools={g.tools} />
          </article>
        ))}
      </div>
    </section>
  );
}

