import { useState } from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import DivisionsDrawer from "./DivisionsDrawer";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <TopNav onMenuOpen={() => setDrawerOpen(true)} />
      <DivisionsDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main className="pt-14 pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
