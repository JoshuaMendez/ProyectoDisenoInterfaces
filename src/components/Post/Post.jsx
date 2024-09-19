import "./Post.css";
import { Users } from "../../assets/dummyData/dummyData";
import { useState } from "react";
import React from 'react';
import Comment from "./comment";

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
                        <div className={isLiked? "bb-icon-f bb-icon-heart like-post-unClicked" : "bb-icon-l bb-icon-heart"}  onClick={likeHandler}></div>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.commentsNumber || 0} comments</span>
                    </div>
                </div>
                <Comment comments = {post.comment} ></Comment>
                <div className="commentInputWrapper">
                    <div className="input-comment">
                        <div className="profile-picture-comment">
                            <img
                            className="postProfileImg"
                            src={user?.profilePicture || 'default-profile.png'}
                            alt=""
                            />
                        </div>
                        <div className="comment-container">
                            <input
                                type="text"
                                className="commentInputField"
                                placeholder="Add a comment..."
                            />
                            <div className={"bb-icon-f bb-icon-camera icon-comment"}></div>
                            <div className={"bb-icon-f bb-icon-video  icon-comment"}></div>
                            <div className={"bb-icon-f bb-icon-file-attach  icon-comment"}></div>
                            <div className={"bb-icon-f bb-icon-gif  icon-comment"}></div>
                        </div>
                    </div>

    </div>
            </div>
        </div>
    );
}