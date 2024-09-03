import React from "react";
import { Header } from "./header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto my-5">{children}</div>
    </>
  );
};
