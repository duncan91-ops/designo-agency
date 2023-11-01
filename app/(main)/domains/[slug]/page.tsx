import styles from "./page.module.scss";
import { getDomains } from "@/utils/getDomains";
import { getProjects } from "@/utils/getProjects";
import { Domain } from "@/components";
import { Project } from "../components";

export async function generateStaticParams() {
  const domains = getDomains();

  return domains.map((domain) => ({ slug: domain.slug }));
}

export default function DomainPage({ params }: { params: { slug: string } }) {
  const domain = getDomains().find((domain) => domain.slug === params.slug)!;
  const projects = getProjects().filter(
    (project) => project.domain === domain.id
  );
  const otherDomains = getDomains().filter(
    (domain) => domain.slug !== params.slug
  );

  return (
    <main className={styles.main}>
      <section
        className={styles.hero}
        style={{
          backgroundImage: `url("${domain.heroImage}")`,
        }}
      >
        <div className={styles.hero__content}>
          <h1 className={styles.title}>{domain.name}</h1>
          <p className={styles.msg}>{domain.description}</p>
        </div>
      </section>

      <section>
        <ul className={`${styles.projects} container`}>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </ul>
      </section>

      <nav className={styles.nav}>
        <ul className={`${styles.domains} container`}>
          {otherDomains.map((domain) => (
            <Domain key={domain.id} domain={domain} />
          ))}
        </ul>
      </nav>
    </main>
  );
}
