import { motion } from "framer-motion";
import { Play, Eye } from "lucide-react";
import { reels } from "@/data/mockData";

const ReelsCarousel = () => {
  return (
    <div className="px-4 pb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-display font-semibold text-sm text-foreground">Trending Reels</h2>
        <button className="text-xs text-primary font-medium">See All</button>
      </div>
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-32 aspect-[9/14] rounded-2xl overflow-hidden relative group cursor-pointer"
          >
            <img
              src={reel.thumbnail}
              alt={reel.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
                <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
              </div>
            </div>

            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-[10px] text-foreground font-medium line-clamp-2">{reel.caption}</p>
              <div className="flex items-center gap-1 mt-1">
                <Eye className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">{reel.views}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReelsCarousel;
