import { contact } from "../data";
import { Icon } from "./ui";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: <Icon.mail />, external: false },
  { label: "LinkedIn", value: "Connect with me", href: contact.linkedin, icon: <Icon.linkedin />, external: true },
  { label: "WhatsApp", value: contact.phone, href: contact.whatsapp, icon: <Icon.chat />, external: true },
];

export default function Contact(): React.JSX.Element {
  return (
    <>
      <section className="bigmq" aria-hidden="true">
        <div className="bigtrack">
          {[0, 1].map((copy) => (
            <span key={copy} style={{ display: "contents" }}>
              <span>Let’s build</span>
              <span className="o">reliable</span>
              <span className="grad">infrastructure</span>
              <span className="o">/</span>
            </span>
          ))}
        </div>
      </section>

      <section className="wrap" id="contact">
        <div className="cta rv">
          <div>
            <span className="kicker scramble">04 / Contact</span>
            <h2 className="ch">
              Got a pipeline on fire? <span className="grad">Let’s talk.</span>
            </h2>
            <p className="cp">
              I’m looking for a team that treats production like it matters — where security isn’t a checkbox and
              automation isn’t optional.
            </p>
            <div className="ctas">
              <a className="btn btn-p magnetic" href={`mailto:${contact.email}`}>
                Start a conversation <Icon.arrow />
              </a>
              <a className="btn magnetic" href={contact.resume} download>
                Download résumé
              </a>
            </div>
          </div>
          <div className="clist">
            {channels.map((c) => (
              <a
                key={c.label}
                className="cl"
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
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
        <footer className="foot">
          <span>© {new Date().getFullYear()} Hasan Jamal</span>
          <span>Built with Next.js · shipped by GitOps</span>
          <span>Islamabad, Pakistan · UTC+5</span>
        </footer>
      </section>
    </>
  );
}
