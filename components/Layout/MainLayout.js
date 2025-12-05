import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MarketSection } from "@/StyledComponents/LayoutStyled";

export default function MainLayout({ children }) {
  return (
    <main>
  
        <Header />
        <MarketSection>{children}</MarketSection>
        <Footer />
     
    </main>
  );
}
