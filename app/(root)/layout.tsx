import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {children}
      Footer RootLayout
    </main>
  );
};

export default RootLayout;
