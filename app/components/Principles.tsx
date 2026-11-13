import { principles } from "../data";

export default function Principles(): React.JSX.Element {
  return (
    <section className="wrap sec" id="principles">
      <div className="head">
        <div>
          <span className="kicker">07 / Principles</span>
          <h2 className="h2 rv">
            How I approach <span className="grad">every platform.</span>
          </h2>
        </div>
        <p className="sub rv">The engineering standards behind the work above.</p>
      </div>
      <div className="princ">
        {principles.map((p, i) => (
          <article key={p.title} className="spot pr-card rv" style={{ "--rd": `${(i % 3) * 0.06}s` } as React.CSSProperties}>
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
