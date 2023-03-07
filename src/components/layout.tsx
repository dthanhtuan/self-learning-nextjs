import { LayoutProps } from "@/models";
import * as React from "react";
import { Footer } from "./footer";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
