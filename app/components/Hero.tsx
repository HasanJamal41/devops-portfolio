import Image from "next/image";
import { contact } from "../data";
import { NetworkCanvas, Terminal, TypedWord } from "./HeroMotion";
import { Icon, Logo } from "./ui";

const orbs = [
  { logo: "kubernetes", name: "Kubernetes", style: { left: "42%", top: -34 } },
  { logo: "aws", name: "AWS", style: { right: -30, top: 96, animationDelay: "-2s" } },
  { logo: "azure", name: "Azure", style: { right: -30, bottom: 110, animationDelay: "-4s" } },
  { logo: "terraform", name: "Terraform", style: { left: -34, bottom: 110, animationDelay: "-5s" } },
];

export default function Hero(): React.JSX.Element {
  return (
    <section className="hero" id="home">
      <div className="aurora" aria-hidden="true">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>
      <NetworkCanvas />
      <div className="wrap hero-grid">
        <div>
          <div className="hello rv">
            <span className="ava">
              <Image src="/assets/hasan-headshot.jpg" alt="" width={34} height={34} priority />
            </span>
            <span>
              Hi, I’m <b>Hasan Jamal</b>
            </span>
            <span className="live" aria-hidden="true" />
          </div>
          <h1 className="h1 rv" style={{ "--rd": ".1s" } as React.CSSProperties} aria-label="Infrastructure that ships with confidence.">
            <span className="line" aria-hidden="true">Infrastructure</span>
            <span className="line" aria-hidden="true">that ships with</span>
            <span className="line" aria-hidden="true">
              <TypedWord />
            </span>
          </h1>
          <p className="lede rv" style={{ "--rd": ".2s" } as React.CSSProperties}>
            DevOps &amp; DevSecOps engineer with <strong>3.5+ years</strong> running multi-cloud platforms on{" "}
            <strong>AWS and Azure</strong> — Kubernetes at scale, GitOps delivery, and a security scanner in every
            pipeline.
          </p>
          <div className="ctas rv" style={{ "--rd": ".3s" } as React.CSSProperties}>
            <a className="btn btn-p magnetic" href="#work">
              Explore my work <Icon.arrow />
            </a>
            <a className="btn magnetic" href={contact.resume} download>
              <Icon.download />
              Download résumé
            </a>
          </div>
          <div className="now mono rv" style={{ "--rd": ".4s" } as React.CSSProperties}>
            <span className="live" aria-hidden="true" />
            <span>
              DevOps Engineer at <b>TEO International</b> · open to new roles
            </span>
          </div>
        </div>

        <div className="console-wrap rv" style={{ "--rd": ".25s" } as React.CSSProperties}>
          {orbs.map((o) => (
            <div key={o.name} className="orb" style={o.style} title={o.name}>
              <Logo src={`/logos/${o.logo}.svg`} size={30} />
            </div>
          ))}
          <div className="console">
            <div className="console-in">
              <div className="cbar">
                <i style={{ background: "#FF5F57" }} />
                <i style={{ background: "#FEBC2E" }} />
                <i style={{ background: "#28C840" }} />
                <span>hasan@prod-cluster</span>
              </div>
              <Terminal />
              <div className="cfoot">
                <div>
                  <small>Clouds</small>
                  <b>AWS · Azure</b>
                </div>
                <div>
                  <small>Clusters</small>
                  <b>AKS · EKS</b>
                </div>
                <div>
                  <small>Status</small>
                  <b className="okc">Available</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
