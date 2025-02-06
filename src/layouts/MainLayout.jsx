import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const MainLayout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { children, menuItems } = props
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const onClickToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onClickCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onClickToggleMenu={onClickToggleMenu} />
      <Menu 
        isMenuOpen={isMenuOpen} 
        onClickCloseMenu={onClickCloseMenu} 
        menuItems={menuItems}
      />
      <main className="flex-1">
        {children}
      </main>
      <Toaster />
      <Footer />
    </div>
  );
};