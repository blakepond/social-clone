import React, {
   useState,
   useEffect,
} from "react";
import "./feed.css";
import PostContainer from "./PostContainer/PostContainer";
import Post from "./Post/Post";
import db from "../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
   const [posts, setPosts] = useState([]);

   return (
      <div className="feed">
         <div className="feed_header">
            <h2>Home</h2>
         </div>
         <PostContainer />

         <FlipMove>
            {/* {posts.map((post) => ( */}
            <Post
               // key={text}
               displayName="placeholder"
               username="placeholder"
               verified="true"
               text="placeholder"
               avatar={null}
               image={null}
            />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            {/* ))} */}
         </FlipMove>
      </div>
   );
};

export default Feed;
