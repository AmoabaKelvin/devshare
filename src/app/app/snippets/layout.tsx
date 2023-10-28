import React from "react";

const SnippetLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-9">
      <div className="mr-10 col-span-full md:col-span-7">{children}</div>
    </section>
  );
};

export default SnippetLayout;
