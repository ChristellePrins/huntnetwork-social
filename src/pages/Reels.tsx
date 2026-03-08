import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, Music, BadgeCheck, Play } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { reels } from "@/data/mockData";

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLikedReels(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="relative aspect-[9/16] max-h-[calc(100vh-136px)] mb-2 rounded-2xl overflow-hidden mx-4"
          >
            <img
              src={reel.thumbnail}
              alt={reel.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />

            {/* Center play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center border border-foreground/10">
                <Play className="w-7 h-7 text-foreground ml-1" />
              </div>
            </div>

            {/* Right side actions */}
            <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5">
              <button onClick={() => toggleLike(reel.id)} className="flex flex-col items-center gap-1">
                <Heart className={`w-7 h-7 ${likedReels.has(reel.id) ? "text-destructive fill-destructive" : "text-foreground"}`} />
                <span className="text-[10px] text-foreground font-medium">{(reel.likes / 1000).toFixed(1)}K</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <MessageCircle className="w-7 h-7 text-foreground" />
                <span className="text-[10px] text-foreground font-medium">{reel.comments}</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <Share2 className="w-6 h-6 text-foreground" />
              </button>
              <button className="flex flex-col items-center gap-1">
                <Bookmark className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-4 left-4 right-16">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {reel.user.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-foreground">{reel.user.username}</span>
                {reel.user.verified && <BadgeCheck className="w-3.5 h-3.5 text-primary fill-primary" />}
                <button className="ml-2 px-3 py-1 rounded-lg border border-foreground/20 text-xs text-foreground font-medium">
                  Follow
                </button>
              </div>
              <p className="text-xs text-foreground/90 leading-relaxed">{reel.caption}</p>
              <div className="flex items-center gap-1.5 mt-2">
                <Music className="w-3 h-3 text-foreground/60" />
                <span className="text-[10px] text-foreground/60">Original Audio</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
};

export default Reels;
