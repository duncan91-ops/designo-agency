import Image from "next/image";
import styles from "./project.module.scss";
import { Project } from "@/types/project";

export default function Project({ project }: { project: Project }) {
  return (
    <li className={styles.project}>
      <div className={styles.img}>
        <Image
          src={project.image}
          alt="project image"
          fill
          object-fit="cover"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{project.name}</h3>
        <p className={styles.msg}>{project.description}</p>
      </div>
    </li>
  );
}
