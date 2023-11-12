import React, { useEffect, useState } from "react";
import "./AllPosts.css";
import axios from "axios";
export default function AllPosts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getPosts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  return (
    <div>
      <br></br>
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="card-header">Genre: {post.genre}</div>
          <div className="card-body">
            <h5 className="card-title">{post.quotes}</h5>
          </div>
        </div>
      ))}
    </div>
  );
}