import { Home, Film, Compass, ShoppingBag, User, Plus } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import CreateModal from "../create/CreateModal";

const navItems = [
  { icon: Home, label: "Pulse", path: "/" },
  { icon: Film, label: "Reels", path: "/reels" },
  { icon: null, label: "Create", path: "" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: User, label: "Profile", path: "/profile" },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-border/50 safe-area-bottom">
        <div className="flex items-center justify-around h-16 max-w-2xl mx-auto px-2">
          {navItems.map((item) => {
            if (item.label === "Create") {
              return (
                <button
                  key="create"
                  onClick={() => setCreateOpen(true)}
                  className="flex flex-col items-center justify-center -mt-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center glow-sm shadow-lg">
                    <Plus className="w-6 h-6 text-primary-foreground" />
                  </div>
                </button>
              );
            }

            const Icon = item.icon!;
            const active = location.pathname === item.path;

            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center gap-0.5 py-1 px-3 relative"
              >
                <Icon className={`w-5 h-5 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-[10px] font-medium transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </span>
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-0.5 w-5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
      <CreateModal open={createOpen} onOpenChange={setCreateOpen} />
    </>
  );
};

export default BottomNav;
