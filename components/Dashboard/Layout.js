import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { MainChildren } from "../../StyledComponents/DashboardStyled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <MainChildren>{children}</MainChildren>
    </>
  );
}
