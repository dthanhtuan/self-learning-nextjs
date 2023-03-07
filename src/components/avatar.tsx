import * as React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

export interface AvatarProps {
  size: string;
  src: StaticImageData;
  figureClass: string;
  imageClass: string;
  alt: string;
}

export default function Avatar({
  size,
  src,
  figureClass,
  imageClass,
  alt,
}: AvatarProps) {
  return (
    <figure className={`image ${size} ${figureClass}`}>
      <Image className={imageClass} src={src} alt={alt} />
    </figure>
  );
}
