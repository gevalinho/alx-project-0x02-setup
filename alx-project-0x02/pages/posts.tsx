import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Headers from "@/components/layout/Header";


const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data: PostProps[] = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (<>
  <Headers />
  <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  </>
    
  );
};

export default PostsPage;
