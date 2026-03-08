import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { stories } from "@/data/mockData";

const StoriesRow = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide">
        {/* Your Story */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-1.5 flex-shrink-0"
        >
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <Plus className="w-5 h-5 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground font-medium">Your Story</span>
        </motion.button>

        {stories.map((story, i) => (
          <motion.button
            key={story.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="flex flex-col items-center gap-1.5 flex-shrink-0"
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-lg font-bold ${
              story.seen ? "bg-secondary" : "bg-gradient-primary glow-sm"
            }`}>
              <div className={`w-[58px] h-[58px] rounded-[14px] bg-card flex items-center justify-center text-foreground ${
                !story.seen ? "ring-2 ring-primary/20" : ""
              }`}>
                {story.user.name.charAt(0)}
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium truncate w-16 text-center">
              {story.user.name.split(" ")[0]}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default StoriesRow;
