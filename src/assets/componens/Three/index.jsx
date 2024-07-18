import React, { useState } from "react";
import "./index.css";

const Post = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const btnLike = () => {
    setLikes(likes + 1);
    if (dislikes > 0) {
      setDislikes(dislikes - 1);
    }
  };

  const btnDislike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
    setDislikes(dislikes + 1);
  };

  return (
    <div className="post">
      <p>Bu post haqidagi fikringiz</p>
      <div className="buttons">
        <button onClick={btnLike}>Like ({likes})</button>
        <button onClick={btnDislike}>Dislike ({dislikes})</button>
      </div>
    </div>
  );
};

export default Post;
