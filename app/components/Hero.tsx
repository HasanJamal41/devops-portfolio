import Image from "next/image";
import { NetworkCanvas, Rotator, Terminal } from "./HeroMotion";
import { Icon, Logo } from "./ui";

const orbs = [
  { logo: "kubernetes", name: "Kubernetes", style: { left: "42%", top: -34 } },
  { logo: "aws", name: "AWS", style: { right: -30, top: 96, animationDelay: "-2s" } },
  { logo: "azure", name: "Azure", style: { right: -30, bottom: 110, animationDelay: "-4s" } },
  { logo: "terraform", name: "Terraform", style: { left: -52, bottom: 120, animationDelay: "-5s" } },
];

const delay = (s: string) => ({ "--rd": s }) as React.CSSProperties;

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
              <b>Hasan Jamal</b> · DevOps Engineer
            </span>
            <span className="live" aria-hidden="true" />
          </div>
          <h1 className="h1 rv" style={delay(".1s")}>
            <span className="line">Cloud platforms</span>
            <span className="line">that stay</span>
            <span className="line">
              <Rotator />
            </span>
          </h1>
          <p className="lede rv" style={delay(".2s")}>
            I design, automate and secure <strong>Kubernetes platforms on AWS and Azure</strong>. GitOps delivery,
            Infrastructure as Code and security checks in every pipeline, backed by <strong>3.5+ years</strong> in
            production.
          </p>
          <div className="ctas rv" style={delay(".3s")}>
            <a className="btn btn-p" href="#projects">
              View projects <Icon.arrow />
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="now mono rv" style={delay(".4s")}>
            <span className="live" aria-hidden="true" />
            <span>
              DevOps Engineer at <b>TEO International</b> · Open to new opportunities
            </span>
          </div>
        </div>

        <div className="console-wrap rv" style={delay(".25s")}>
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
                <span>release · production</span>
              </div>
              <Terminal />
              <div className="cfoot">
                <div>
                  <small>Clouds</small>
                  <b>AWS · Azure</b>
                </div>
                <div>
                  <small>Runtime</small>
                  <b>AKS · EKS</b>
                </div>
                <div>
                  <small>Delivery</small>
                  <b className="okc">GitOps</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
