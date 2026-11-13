import { education, facts, focusAreas } from "../data";
import { Icon } from "./ui";

export default function About(): React.JSX.Element {
  return (
    <section className="wrap sec" id="about">
      <div className="head">
        <div>
          <span className="kicker">01 / About</span>
          <h2 className="h2 rv">
            Reliable delivery, <span className="grad">secure by design.</span>
          </h2>
        </div>
        <p className="sub rv">A DevOps engineer who treats infrastructure, pipelines and security policy as one system.</p>
      </div>

      <div className="about">
        <div className="prose rv">
          <p>
            I’m a DevOps Engineer with <strong>3.5+ years</strong> of experience in cloud infrastructure, platform
            reliability and secure software delivery across <strong>AWS and Azure</strong>.
          </p>
          <p>
            Day to day I run Kubernetes platforms, implement GitOps workflows with <strong>ArgoCD and FluxCD</strong>,
            and build CI/CD with GitHub Actions, GitLab CI, Jenkins and Azure Pipelines. Infrastructure is written in
            Terraform, and high availability is designed in from the start.
          </p>
          <p>
            I also work on the offensive side of security: reconnaissance and service enumeration with Nmap, automated
            scanning with OWASP ZAP, Nikto and ffuf, and hardening the infrastructure I find gaps in.
          </p>
          <ul className="focus" data-stagger>
            {focusAreas.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="rv" style={{ "--rd": ".1s" } as React.CSSProperties}>
          <div className="facts">
            {facts.map((s) => (
              <div key={s.label} className="fact">
                <div className="sv">
                  <span className="count grad" data-to={s.to} data-dec={s.decimals}>
                    {s.to.toFixed(s.decimals)}
                  </span>
                  {s.suffix && <span className="grad">{s.suffix}</span>}
                </div>
                <div className="sl">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="spot edu">
            <span className="ticon">
              <Icon.cap />
            </span>
            <div>
              <b>{education.degree}</b>
              <span>{education.school}</span>
            </div>
            <em>{education.period}</em>
          </div>
        </div>
      </div>
    </section>
  );
}
