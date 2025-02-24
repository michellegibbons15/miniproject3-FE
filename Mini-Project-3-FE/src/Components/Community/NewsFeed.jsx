import { useState } from "react";
import "../../Styles/Community/NewsFeed.css"

export default function NewsFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "This is my first post!",
      author: "Jane Doe",
      timestamp: "Just now",
      likes: 2,
      comments: [{ author: "John", text: "Nice post!" }],
    },
    {
      id: 2,
      content: "React is awesome! 🔥",
      author: "John Smith",
      timestamp: "5 mins ago",
      likes: 5,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");

  // Function to handle posting new content
  const handlePost = () => {
    if (newPost.trim() === "") return;
    const post = {
      id: posts.length + 1,
      content: newPost,
      author: "You", // Replace with user data in real app
      timestamp: "Just now",
      likes: 0,
      comments: [],
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  // Function to handle liking a post
  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  // Function to handle adding a comment
  const handleComment = (postId, commentText) => {
    if (commentText.trim() === "") return;
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { author: "You", text: commentText }] }
        : post
    ));
  };

  return (
    <div className="NewsFeed-container">
      {/* Post Input Box */}
      <div className="personal-post">
        <textarea
          placeholder="What's on your mind?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button className="feed-btn" onClick={handlePost}>Post</button>
      </div>

      {/* Posts List */}
      {posts.map((post) => (
        <div key={post.id} className="Post-List">
          <p >{post.author}</p>
          <p >{post.timestamp}</p>
          <p >{post.content}</p>

          {/* Like Button */}
          <div >
            <button className="feed-btn" onClick={() => handleLike(post.id)}>
              ❤️ {post.likes}
            </button>
          </div>

          {/* Comments Section */}
          <div className="Comment-section">
            {post.comments.map((comment, index) => (
              <p key={index} >
                <strong>{comment.author}:</strong> {comment.text}
              </p>
            ))}

            {/* Comment Input */}
            <input
              type="text"
              placeholder="Write a comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleComment(post.id, e.target.value);
                  e.target.value = "";
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}