import { lifecycle } from "../data";
import { ToolMark } from "./ui";

// Each stage lights up in turn while a pulse travels the track; one full cycle is 9s.
const STEP = 9 / lifecycle.length;

export default function Lifecycle(): React.JSX.Element {
  return (
    <section className="wrap sec" id="delivery">
      <div className="head">
        <div>
          <span className="kicker">02 / Delivery</span>
          <h2 className="h2 rv">
            From commit to production, <span className="grad">automated end to end.</span>
          </h2>
        </div>
        <p className="sub rv">The delivery loop I build for every team, with the tools I use at each stage.</p>
      </div>

      <div className="flow" data-stagger>
        <div className="track-line" aria-hidden="true">
          <i />
        </div>
        {lifecycle.map((stage, i) => (
          <div key={stage.name} className="stage">
            <span className="node" style={{ "--d": `${(i * STEP).toFixed(2)}s` } as React.CSSProperties}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{stage.name}</h3>
            <p>{stage.desc}</p>
            <div className="logos">
              {stage.tools.map((tool) => (
                <span key={tool.name} title={tool.name}>
                  <ToolMark tool={tool} size={18} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
