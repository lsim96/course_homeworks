import "./Page.css";
import type { ReactNode } from "react";

interface PageProps {
  title: string;
  children: ReactNode;
}

export function Page({ title, children }: PageProps) {
  return (
    <section className="page">
      <div className="page-heading">
        <h2>{title}</h2>
      </div>
      <div className="page-content">{children}</div>
    </section>
  );
}
