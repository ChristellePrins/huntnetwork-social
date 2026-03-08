import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, BadgeCheck, MapPin, ShoppingBag } from "lucide-react";
import { Post } from "@/data/mockData";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard = ({ post, index }: PostCardProps) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [saved, setSaved] = useState(post.saved || false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const formatCount = (n: number) => {
    if (n >= 1000) return (n / 1000).toFixed(1) + "K";
    return n.toString();
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-border/50"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
            {post.user.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-foreground">{post.user.name}</span>
              {post.user.verified && <BadgeCheck className="w-3.5 h-3.5 text-primary fill-primary" />}
            </div>
            <div className="flex items-center gap-1.5">
              {post.location && (
                <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                  <MapPin className="w-2.5 h-2.5" /> {post.location}
                </span>
              )}
              <span className="text-[10px] text-muted-foreground">· {post.timeAgo}</span>
            </div>
          </div>
        </div>
        <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt={post.caption}
          className="w-full aspect-square object-cover"
          onDoubleClick={handleLike}
        />
        {post.type === "marketplace" && post.price && (
          <div className="absolute top-3 right-3 glass rounded-xl px-3 py-1.5 flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-foreground">{post.price}</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-4 py-2.5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <button onClick={handleLike} className="flex items-center gap-1.5 group">
              <Heart className={`w-5 h-5 transition-all ${liked ? "text-destructive fill-destructive scale-110" : "text-foreground group-hover:text-destructive"}`} />
              <span className="text-xs font-medium text-foreground">{formatCount(likeCount)}</span>
            </button>
            <button className="flex items-center gap-1.5 group">
              <MessageCircle className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs font-medium text-foreground">{formatCount(post.comments)}</span>
            </button>
            <button className="flex items-center gap-1.5 group">
              <Share2 className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="text-xs font-medium text-foreground">{formatCount(post.shares)}</span>
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="group">
            <Bookmark className={`w-5 h-5 transition-all ${saved ? "text-primary fill-primary" : "text-foreground group-hover:text-primary"}`} />
          </button>
        </div>

        {/* Caption */}
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold">{post.user.username} </span>
          {post.caption}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs text-primary font-medium">#{tag}</span>
            ))}
          </div>
        )}

        {post.type === "marketplace" && (
          <button className="mt-3 w-full py-2.5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Book / Enquire Now
          </button>
        )}
      </div>
    </motion.article>
  );
};

export default PostCard;
