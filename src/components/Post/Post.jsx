import "./Post.css";
import { Users } from "../../assets/dummyData/dummyData";
import { useState } from "react";
import React from 'react';

export default function Post({ post }) {
    const [like, setLike] = useState(post.like || 0);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    const user = Users.find((u) => u.id === post?.userId);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={user?.profilePicture || "default-profile.png"} // Imagen predeterminada si falta la imagen
                            alt=""
                        />
                        <span className="postUsername">{user?.username || "Unknown"}</span>
                        <span className="postDate">{post.date || "Unknown date"}</span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc || "No description available."}</span>
                    {post.photo && <img className="postImg" src={post.photo} alt="Post" />}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                        <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment || 0} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}