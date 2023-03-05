import * as React from "react";
import Image from "next/image";
import avatar from "@/static/images/avatar.png";

export default function Avatar() {
  return (
    <div>
      <style jsx>{`
        div {
          background: red;
        }
      `}</style>
      <Image src={avatar} alt="avatar" />
    </div>
  );
}
