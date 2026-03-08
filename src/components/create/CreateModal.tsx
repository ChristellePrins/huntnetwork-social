import { motion, AnimatePresence } from "framer-motion";
import { X, Image, Film, Clock, Video, Radio, ShoppingBag } from "lucide-react";

interface CreateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const createOptions = [
  { icon: Image, label: "Post", desc: "Photo or text post", color: "text-primary" },
  { icon: Film, label: "Reel", desc: "Short vertical video", color: "text-primary" },
  { icon: Clock, label: "Story", desc: "24-hour content", color: "text-primary" },
  { icon: Video, label: "Long Video", desc: "YouTube-style video", color: "text-primary" },
  { icon: Radio, label: "Go Live", desc: "Stream to your followers", color: "text-destructive" },
  { icon: ShoppingBag, label: "Listing", desc: "Marketplace item", color: "text-verified" },
];

const CreateModal = ({ open, onOpenChange }: CreateModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-background/70 backdrop-blur-md"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-lg bg-card rounded-t-3xl border-t border-border p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-lg text-foreground">Create</h2>
              <button onClick={() => onOpenChange(false)} className="p-2 rounded-xl hover:bg-secondary transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {createOptions.map((opt, i) => (
                <motion.button
                  key={opt.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary hover:bg-muted transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
                    <opt.icon className={`w-5 h-5 ${opt.color}`} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">{opt.label}</p>
                    <p className="text-[10px] text-muted-foreground">{opt.desc}</p>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-4 h-1 w-12 mx-auto rounded-full bg-muted" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CreateModal;
