import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("http://localhost:8080/api/v1");
    const data = await res.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return posts.map((post) => {
    return (
      <div
        key={post.postId}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img
          className="w-full h-96 object-cover"
          src={post.postImageLink}
          alt={post.postName}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.postName}</div>
          <p className="text-gray-700 text-base">{post.postDescription}</p>
        </div>

        <div className="px-5 pb-6">
          {post.postTags.map((tag) => {
            return (
              <span
                key={tag}
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                #{tag}
              </span>
            );
          })}
        </div>
      </div>
    );
  });
};

export default Post;
