import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified: boolean;
  type: "hunter" | "outfitter" | "brand" | "guide";
  followers: number;
  bio?: string;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  tags: string[];
  location?: string;
  timeAgo: string;
  liked?: boolean;
  saved?: boolean;
  type: "post" | "marketplace";
  price?: string;
}

export interface Reel {
  id: string;
  user: User;
  thumbnail: string;
  views: string;
  caption: string;
  likes: number;
  comments: number;
}

export interface Story {
  id: string;
  user: User;
  seen: boolean;
}

export const users: User[] = [
  { id: "1", name: "Jake Morrison", username: "jakehunts", avatar: "", verified: true, type: "hunter", followers: 12400, bio: "Bowhunter | Montana Born | Living the wild life 🏔️" },
  { id: "2", name: "Safari Outfitters SA", username: "safarioutfitters", avatar: "", verified: true, type: "outfitter", followers: 89200, bio: "Premier African Safari Experiences since 1998" },
  { id: "3", name: "Emma Wilder", username: "wildemmahunts", avatar: "", verified: false, type: "hunter", followers: 3200, bio: "First-gen hunter | Dog mom | Waterfowl addict 🦆" },
  { id: "4", name: "Precision Arms Co.", username: "precisionarms", avatar: "", verified: true, type: "brand", followers: 156000, bio: "Crafting excellence since 1952. Official partner of HuntNetwork." },
  { id: "5", name: "Captain Mike", username: "captmikefishing", avatar: "", verified: true, type: "guide", followers: 45600, bio: "Deep sea fishing charters | Gulf Coast | 25 yrs experience" },
  { id: "6", name: "Sarah Bridger", username: "sarahbridger", avatar: "", verified: false, type: "hunter", followers: 8900, bio: "Elk country 🦌 | Colorado" },
];

export const stories: Story[] = [
  { id: "1", user: users[0], seen: false },
  { id: "2", user: users[1], seen: false },
  { id: "3", user: users[2], seen: true },
  { id: "4", user: users[3], seen: false },
  { id: "5", user: users[4], seen: true },
  { id: "6", user: users[5], seen: false },
];

export const reels: Reel[] = [
  { id: "1", user: users[0], thumbnail: reel1, views: "124K", caption: "Golden hour stalk 🌅", likes: 8923, comments: 342 },
  { id: "2", user: users[1], thumbnail: reel2, views: "89K", caption: "Majestic bull elk spotted!", likes: 12400, comments: 567 },
  { id: "3", user: users[2], thumbnail: reel3, views: "234K", caption: "African sunset magic ✨", likes: 34200, comments: 1203 },
  { id: "4", user: users[3], thumbnail: reel4, views: "56K", caption: "Fall archery season", likes: 4500, comments: 189 },
];

export const posts: Post[] = [
  {
    id: "1", user: users[0], image: post1, caption: "Best morning in the marsh with Duke. Nothing beats waterfowl season with your best friend by your side. #duckhunting #retrievers #marshlife",
    likes: 2847, comments: 156, shares: 89, saves: 234, tags: ["duckhunting", "retrievers"], location: "Louisiana Bayou", timeAgo: "2h", type: "post",
  },
  {
    id: "2", user: users[1], image: post2, caption: "Backcountry camp at 10,000ft. This is what we live for. 5 days deep, no cell service, pure wilderness. 🏔️ #backcountry #elkhunting #wildernesscamp",
    likes: 5623, comments: 342, shares: 278, saves: 890, tags: ["backcountry", "elkhunting"], location: "Bob Marshall Wilderness, MT", timeAgo: "5h", type: "post",
  },
  {
    id: "3", user: users[4], image: post3, caption: "Offshore charters now booking for Spring! 🎣 Deep sea fishing at its finest — tuna, marlin, and more. Limited spots available.",
    likes: 1234, comments: 89, shares: 45, saves: 567, tags: ["fishing", "offshore", "charter"], location: "Gulf of Mexico", timeAgo: "8h", type: "marketplace", price: "From $899/day",
  },
];

export const feedFilters = ["For You", "Following", "Near Me", "Verified", "Marketplace", "Fishing", "Safaris"];

export const divisions = [
  { name: "Marketplace", icon: "🏪", desc: "Buy, sell & trade gear", color: "primary" },
  { name: "Verified", icon: "✅", desc: "Trusted outfitters & guides", color: "verified" },
  { name: "Air", icon: "✈️", desc: "Charter flights to remote hunts", color: "primary" },
  { name: "Taxidermy", icon: "🦌", desc: "Premium taxidermy services", color: "primary" },
  { name: "Fishing", icon: "🎣", desc: "Fishing trips & charters", color: "primary" },
  { name: "Family Safaris", icon: "👨‍👩‍👧‍👦", desc: "Family-friendly adventures", color: "primary" },
];

export const trendingTags = ["#elkhunting", "#africansafari", "#bowhunting", "#duckhunting", "#deerhunting", "#fishing", "#backcountry", "#wildcooking"];
