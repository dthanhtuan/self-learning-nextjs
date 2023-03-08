import { StaticImageData } from "next/image";

export interface ImageTagProps {
  src: StaticImageData;
  figureClass?: string;
  imageClass?: string;
  alt: string;
}
