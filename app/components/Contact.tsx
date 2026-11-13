import Link from "next/link";
import { contact, navLinks } from "../data";
import CopyEmail from "./CopyEmail";
import { Icon } from "./ui";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: <Icon.mail />, external: false },
  { label: "LinkedIn", value: "Hasan Jamal", href: contact.linkedin, icon: <Icon.linkedin />, external: true },
  { label: "WhatsApp", value: contact.phone, href: contact.whatsapp, icon: <Icon.chat />, external: true },
];

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Contact(): React.JSX.Element {
  return (
    <>
      <section className="wrap sec" id="contact">
        <div className="cta rv">
          <div>
            <span className="kicker">08 / Contact</span>
            <h2 className="ch">
              Let’s build something <span className="grad">reliable together.</span>
            </h2>
            <p className="cp">
              I’m open to DevOps, Platform and DevSecOps roles, remote or on-site. Email is the fastest way to reach
              me.
            </p>
            <div className="ctas">
              <a className="btn btn-p" href={`mailto:${contact.email}`}>
                Send an email <Icon.arrow />
              </a>
              <a className="btn" href={contact.resume} download>
                <Icon.download />
                Download résumé
              </a>
              <CopyEmail email={contact.email} />
            </div>
          </div>
          <div className="clist">
            {channels.map((c) => (
              <a key={c.label} className="cl" href={c.href} {...(c.external ? ext : {})}>
                <span className="ic">{c.icon}</span>
                <span>
                  <b>{c.label}</b>
                  <span>{c.value}</span>
                </span>
                <Icon.external />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="fin">
            <div>
              <a className="brand" href="#top">
                <span className="mark">HJ</span>Hasan Jamal
              </a>
              <p>DevOps Engineer building secure, automated cloud platforms on AWS and Azure. Based in {contact.location}.</p>
            </div>
            <div>
              <p className="fh">Navigate</p>
              <ul>
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a href={`#${l.id}`}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="fh">Connect</p>
              <ul>
                <li><a href={`mailto:${contact.email}`}>Email</a></li>
                <li><a href={contact.linkedin} {...ext}>LinkedIn</a></li>
                <li><a href={contact.whatsapp} {...ext}>WhatsApp</a></li>
                <li><Link href="/resume">Résumé (web)</Link></li>
                <li><a href={contact.resume} download>Résumé (PDF)</a></li>
              </ul>
            </div>
          </div>
          <div className="fbar">
            <span>© {new Date().getFullYear()} Hasan Jamal. All rights reserved.</span>
            <span>Built with Next.js · Deployed on Vercel</span>
          </div>
        </div>
      </footer>
    </>
  );
}
