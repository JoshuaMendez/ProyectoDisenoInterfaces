import "./comment.css";
import { useState } from "react";
import React from "react";

const Comment = ({ comments }) => {
  const [likes, setLikes] = useState(comments.map((comment) => comment.likes || 0));
  const [isLiked, setIsLiked] = useState(comments.map(() => false));
  const [heartPositions, setHeartPositions] = useState(comments.map(() => null)); // Posición del corazón animado

  const likeHandler = (index, e) => {
    const newLikes = [...likes];
    const newIsLiked = [...isLiked];

    if (newIsLiked[index]) {
      newLikes[index]--;
    } else {
      newLikes[index]++;

      // Calcula la posición del clic relativo al contenedor principal
      const parentRect = e.target.closest(".profile-comment").getBoundingClientRect();
      const x = e.clientX - parentRect.left; // Coordenada X relativa al contenedor
      const y = e.clientY - parentRect.top; // Coordenada Y relativa al contenedor

      // Establece la posición del corazón animado
      const newHeartPositions = [...heartPositions];
      newHeartPositions[index] = { x, y };
      setHeartPositions(newHeartPositions);

      // Oculta el corazón tras 1 segundo
      setTimeout(() => {
        const resetHeartPositions = [...heartPositions];
        resetHeartPositions[index] = null;
        setHeartPositions(resetHeartPositions);
      }, 1000);
    }

    newIsLiked[index] = !newIsLiked[index];
    setLikes(newLikes);
    setIsLiked(newIsLiked);
  };

  return (
    <div className="postComments">
      {comments.map((comment, i) => (
        <span key={i} style={{ position: "relative" }}> {/* Contenedor relativo */}
          <div className="profile-comment">
            <div className="profile-picture-comment">
              <img
                className="postProfileImg"
                src={comment?.profilePicture || "default-profile.png"}
                alt=""
              />
            </div>
            <div className="text-comment">
              <span className="postUsername">{comment?.profileUsername || "Unknown"}</span>
              <br />
              {comment.comment}
              <br />
              <div className="postBottom">
                <div className="postBottomLeft">
                  <div
                    className={
                      isLiked[i]
                        ? "bb-icon-f bb-icon-heart like-post-unClicked"
                        : "bb-icon-l bb-icon-heart"
                    }
                    onClick={(e) => likeHandler(i, e)} // Pasa el evento del mouse
                  ></div>
                  <span className="postLikeCounter">{likes[i]} likes</span>
                </div>
                <div className="postBottomRight">
                  <span className="postDate">{comment.date || ""}</span>
                </div>
              </div>
              <div className="relleno-comment"></div>
            </div>
            {/* Corazón animado */}
            {heartPositions[i] && (
              <div
                className="heart-animation-comment"
                style={{
                  top: `${heartPositions[i].y}px`,
                  left: `${heartPositions[i].x}px`,
                }}
              >
                ❤️
              </div>
            )}
          </div>
        </span>
      ))}
    </div>
  );
};

export default Comment;
