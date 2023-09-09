import { ReactNode } from "react";
import { Footer, Header } from "./";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
    </>
  );
}
