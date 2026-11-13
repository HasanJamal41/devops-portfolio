import { roles } from "../data";
import { Chips } from "./ui";

export default function Experience(): React.JSX.Element {
  return (
    <section className="wrap sec" id="experience">
      <div className="head">
        <div>
          <span className="kicker">05 / Experience</span>
          <h2 className="h2 rv">
            Production experience, <span className="grad">from bare metal to AKS.</span>
          </h2>
        </div>
        <p className="sub rv">
          Three roles across Pakistan and Canada, each with direct ownership of production systems.
        </p>
      </div>

      <div className="xp" id="xp">
        <div className="rail" aria-hidden="true">
          <i id="railfill" />
        </div>
        {roles.map((role) => (
          <article key={role.company} className={`spot job rv${role.current ? " on" : ""}`}>
            <span className="commit" aria-hidden="true" />
            <div>
              <div className="hash">
                <b>{role.ref}</b>
                {role.current && <span className="tag">current</span>}
              </div>
              <h3 className="jt">{role.title}</h3>
              <p className="jc grad">{role.company}</p>
              <p className="jl">
                {role.period} · {role.location}
              </p>
              <p className="jq">{role.summary}</p>
            </div>
            <div>
              <ul className="pts" data-stagger>
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Chips tools={role.tools} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
