import React from "react";
import "./postContainer.css";
import Button from "@mui/material/Button";

const PostContainer = () => {
   return (
      <div className="postContainer">
         <form action="">
            <div className="postContainer_input">
               <input
                  placeholder="What's up?"
                  type="text"
               />
            </div>
            <input
               className="postContainer_imageInput"
               placeholder="Enter image URL"
               type="text"
            />
            <Button className="postContainer_postButton">
               Create
            </Button>
         </form>
      </div>
   );
};

export default PostContainer;
