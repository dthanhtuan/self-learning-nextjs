import { StaticImageData } from "next/image";
import { Ship } from "@/models/ship";

export interface JobProps {
  status: string;
  apply_start_date: string;
  position: string;
  company_name: string;
  eyecatch: StaticImageData;
  ship: Ship;
  features: string[];
}
