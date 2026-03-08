import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { divisions } from "@/data/mockData";

interface DivisionsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const DivisionsDrawer = ({ open, onClose }: DivisionsDrawerProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 z-[70] w-80 bg-card border-r border-border overflow-y-auto"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display font-bold text-lg text-foreground">Divisions</h2>
                  <p className="text-xs text-muted-foreground">Explore the HuntNetwork ecosystem</p>
                </div>
                <button onClick={onClose} className="p-2 rounded-xl hover:bg-secondary transition-colors">
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-2">
                {divisions.map((div, i) => (
                  <motion.button
                    key={div.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="w-full flex items-center gap-4 p-3.5 rounded-xl hover:bg-secondary transition-all group"
                  >
                    <span className="text-2xl">{div.icon}</span>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-foreground text-sm">{div.name}</p>
                      <p className="text-xs text-muted-foreground">{div.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="text-xs font-display font-semibold text-primary mb-1">HuntPass Rewards</p>
                <p className="text-xs text-muted-foreground">Earn points for posting, verifying & referrals</p>
                <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-primary rounded-full" />
                </div>
                <p className="text-[10px] text-muted-foreground mt-1.5">2,450 / 5,000 points to Gold</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DivisionsDrawer;
