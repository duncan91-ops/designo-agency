import { Domain } from "@/types/domain";
import domains from "@/data/domains.json";

export function getDomains() {
  return domains as Domain[];
}
