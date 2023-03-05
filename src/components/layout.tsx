import { LayoutProps } from "@/models";
import * as React from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
