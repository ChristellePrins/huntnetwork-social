import { useState } from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, MapPin } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { reels, posts, trendingTags } from "@/data/mockData";

const allMedia = [
  ...reels.map(r => ({ id: r.id, src: r.thumbnail, type: "reel" as const })),
  ...posts.map(p => ({ id: p.id, src: p.image, type: "post" as const })),
];

const Explore = () => {
  const [query, setQuery] = useState("");

  return (
    <AppLayout>
      <div className="px-4 py-3">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search people, tags, locations..."
            className="w-full h-10 rounded-xl bg-secondary pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
          />
        </div>

        {/* Trending tags */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="text-xs font-display font-semibold text-foreground">Trending</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingTags.map(tag => (
              <button key={tag} className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* HuntMap teaser */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 p-4 rounded-2xl bg-secondary border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-2 mb-1">
            <MapPin className="w-4 h-4 text-primary" />
            <h3 className="font-display font-semibold text-sm text-foreground">HuntMap</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Coming Soon</span>
          </div>
          <p className="text-xs text-muted-foreground">Discover trending hunts and posts by location with our interactive map.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-0.5 rounded-xl overflow-hidden">
          {allMedia.map((item, i) => (
            <motion.div
              key={`${item.type}-${item.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`relative cursor-pointer group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover aspect-square group-hover:opacity-80 transition-opacity"
              />
              {item.type === "reel" && (
                <div className="absolute top-2 right-2">
                  <span className="text-[10px] font-medium text-foreground bg-background/50 backdrop-blur-sm px-1.5 py-0.5 rounded">🎬</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Explore;
