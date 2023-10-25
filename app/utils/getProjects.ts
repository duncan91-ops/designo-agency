import projects from "@/data/projects.json";
import { Project } from "@/types/project";

export function getProjects() {
  return projects as Project[];
}
