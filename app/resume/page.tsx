import type { Metadata } from "next";
import Link from "next/link";
import { contact, education } from "../data";
import { siteUrl } from "../site";
import { experience, keyProject, skills, summary } from "./content";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé | Hasan Jamal, DevOps Engineer",
  description: "Résumé of Hasan Jamal, DevOps Engineer with 3.5+ years across AWS, Azure, Kubernetes, GitOps and DevSecOps.",
  alternates: { canonical: "/resume" },
};

const site = siteUrl.replace(/^https?:\/\//, "");
const linkedin = contact.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Printable résumé. Light, single column and ATS-friendly; the PDF in /public is printed from this page.
export default function ResumePage(): React.JSX.Element {
  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/">← Back to portfolio</Link>
        <a className={styles.dl} href={contact.resume} download>
          Download PDF
        </a>
      </div>

      <article className={styles.sheet}>
        <header className={styles.header}>
          <h1>Hasan Jamal</h1>
          <p className={styles.role}>DevOps Engineer</p>
          <p className={styles.contact}>
            <span>{contact.location}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.whatsapp}>{contact.phone}</a>
            <a href={contact.linkedin}>{linkedin}</a>
            <a href={siteUrl}>{site}</a>
          </p>
        </header>

        <section>
          <h2>Professional summary</h2>
          <p>{summary}</p>
        </section>

        <section>
          <h2>Skills</h2>
          <dl className={styles.skills}>
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2>Professional experience</h2>
          {experience.map((role) => (
            <div key={role.company} className={styles.role2}>
              <div className={styles.line}>
                <h3>
                  {role.title}, {role.company}
                </h3>
                <span>{role.period}</span>
              </div>
              <p className={styles.meta}>{role.location}</p>
              <ul>
                {role.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Key project</h2>
          <div className={styles.role2}>
            <div className={styles.line}>
              <h3>{keyProject.title}</h3>
              <span>{keyProject.context}</span>
            </div>
            <p className={styles.meta}>{keyProject.stack}</p>
            <ul>
              {keyProject.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2>Education</h2>
          <div className={styles.line}>
            <h3>
              {education.degree}, {education.school}
            </h3>
            <span>{education.period}</span>
          </div>
        </section>
      </article>
    </div>
  );
}
