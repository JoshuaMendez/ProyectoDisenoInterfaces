import "./comment.css";
import { useState} from "react";
import React from 'react';

const Comment = ({ comments }) => {
    const [likes, setLikes] = useState(comments.map(comment => comment.likes || 0));
    const [isLiked, setIsLiked] = useState(comments.map(() => false)); 
    const likeHandler = (index) => {
      const newLikes = [...likes];
      const newIsLiked = [...isLiked];
      
      if (newIsLiked[index]) {
        newLikes[index]--; 
      } else {
        newLikes[index]++; 
      }
  
      newIsLiked[index] = !newIsLiked[index]; 
      
      setLikes(newLikes);
      setIsLiked(newIsLiked);
    };
  
    return (
      <div className="postComments">
        {comments.map((comment, i) => (
          <span key={i}>
            <div className="profile-comment">
              <div className="profile-picture-comment">
                <img
                  className="postProfileImg"
                  src={comment?.profilePicture || 'default-profile.png'}
                  alt=""
                />
              </div>
              <div className="text-comment">
                <span className="postUsername">{comment?.profileUsername || 'Unknown'}</span>
                <br />
                {comment.comment}
                <br />
                <div className="postBottom">
                  <div className="postBottomLeft">
                    <div
                      className={
                        isLiked[i]
                          ? 'bb-icon-f bb-icon-heart like-post-unClicked'
                          : 'bb-icon-l bb-icon-heart'
                      }
                      onClick={() => likeHandler(i)} 
                    ></div>
                    <span className="postLikeCounter">{likes[i]} likes</span>
                  </div>
                  <div className="postBottomRight">
                    <span className="postDate">{comment.date || ''}</span>
                  </div>
                </div>
                <div className="relleno-comment"></div>
              </div>
            </div>
          </span>
        ))}
      </div>
    );
  };
  
  export default Comment;