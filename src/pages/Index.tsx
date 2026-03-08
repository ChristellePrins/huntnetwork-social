import AppLayout from "@/components/layout/AppLayout";
import StoriesRow from "@/components/feed/StoriesRow";
import ReelsCarousel from "@/components/feed/ReelsCarousel";
import FeedFilters from "@/components/feed/FeedFilters";
import PostCard from "@/components/feed/PostCard";
import { posts } from "@/data/mockData";

const Index = () => {
  return (
    <AppLayout>
      <StoriesRow />
      <ReelsCarousel />
      <FeedFilters />
      <div>
        {posts.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Index;
