import { Bell, Search, Menu, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface TopNavProps {
  onMenuOpen: () => void;
}

const TopNav = ({ onMenuOpen }: TopNavProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="flex items-center justify-between px-4 h-14 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <button onClick={onMenuOpen} className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <motion.h1 
            className="text-lg font-display font-bold text-gradient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            HuntNetwork
          </motion.h1>
          <span className="text-[10px] font-semibold tracking-widest text-primary uppercase">Pulse</span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-xl hover:bg-secondary transition-colors relative">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="p-2 rounded-xl hover:bg-secondary transition-colors relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          </button>
          <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
            <MessageCircle className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
