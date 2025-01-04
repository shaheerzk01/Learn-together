// components/layouts/DefaultLayout.tsx
"use client";

import React, { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";


interface LayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navbar */}
      <header className="bg-[#F4F7FA] shadow-md">
        <Header />
      </header>

      {/* Main content (Children) */}
      <main className="flex-1 bg-[#F4F7FA]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#F4F7FA] shadow-md">
        <Footer />
      </footer>
    </div>
  );
};

export default DefaultLayout;
