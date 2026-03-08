import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Grid3X3, Film, Bookmark, BadgeCheck, MapPin, Award, Shield } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";
import { users, posts, reels } from "@/data/mockData";

const user = users[0];
const tabs = [
  { icon: Grid3X3, label: "Posts" },
  { icon: Film, label: "Reels" },
  { icon: Bookmark, label: "Saved" },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="px-4 py-5">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground glow-sm">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="font-display font-bold text-lg text-foreground">{user.name}</h1>
                  {user.verified && <BadgeCheck className="w-4 h-4 text-primary fill-primary" />}
                </div>
                <p className="text-xs text-muted-foreground">@{user.username}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Shield className="w-3 h-3 text-verified" />
                  <span className="text-[10px] text-verified font-medium">Verified Hunter</span>
                </div>
              </div>
            </div>
            <button className="p-2 rounded-xl hover:bg-secondary transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          <p className="text-sm text-foreground leading-relaxed mb-3">{user.bio}</p>
          <div className="flex items-center gap-1.5 mb-4">
            <MapPin className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Montana, USA</span>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-4">
            {[
              { label: "Posts", value: "234" },
              { label: "Followers", value: "12.4K" },
              { label: "Following", value: "891" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-base font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold">
              Edit Profile
            </button>
            <button className="flex-1 py-2 rounded-xl bg-secondary text-secondary-foreground text-sm font-medium">
              Share Profile
            </button>
          </div>

          {/* HuntPass */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-3 rounded-xl bg-secondary border border-border"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-display font-semibold text-foreground">HuntPass</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Silver</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-primary rounded-full" />
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">2,450 XP — 2,550 to Gold</p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(i)}
              className={`flex-1 py-3 flex items-center justify-center gap-1.5 relative transition-colors ${
                activeTab === i ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{tab.label}</span>
              {activeTab === i && (
                <motion.div
                  layoutId="profileTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-0.5 p-0.5">
          {[...posts.map(p => p.image), ...reels.map(r => r.thumbnail)].map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
