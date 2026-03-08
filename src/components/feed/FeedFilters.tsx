import { useState } from "react";
import { motion } from "framer-motion";
import { feedFilters } from "@/data/mockData";

const FeedFilters = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="px-4 pb-3">
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {feedFilters.map((filter, i) => (
          <button
            key={filter}
            onClick={() => setActive(i)}
            className="relative flex-shrink-0"
          >
            <span className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors block ${
              active === i
                ? "text-primary-foreground"
                : "text-muted-foreground bg-secondary hover:text-foreground"
            }`}>
              {filter}
            </span>
            {active === i && (
              <motion.div
                layoutId="feedFilter"
                className="absolute inset-0 bg-gradient-primary rounded-full -z-10"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
