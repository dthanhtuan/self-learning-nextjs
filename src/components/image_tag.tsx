import * as React from "react";
import Image from "next/image";
import { ImageTagProps } from "@/models/image_tag";

export default function ImageTag({
  src,
  figureClass = "",
  imageClass = "",
  alt = "",
}: ImageTagProps) {
  return (
    <figure className={`image ${figureClass}`}>
      <Image className={imageClass} src={src} alt={alt} />
    </figure>
  );
}
