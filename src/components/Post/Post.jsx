import "./Post.css";
import { Users } from "../../assets/dummyData/dummyData";
import { useState } from "react";
import React from 'react';
import Comment from "./comment";

export default function Post({ post }) {
    const [like, setLike] = useState(post.like || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [showHeart, setShowHeart] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);

        if (!isLiked) {
            setShowHeart(true);
            setTimeout(() => setShowHeart(false), 1000); 
        }
    };

    const user = Users.find((u) => u.id === post?.userId);

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img
                            className="postProfileImg"
                            src={user?.profilePicture || "default-profile.png"}
                            alt=""
                        />
                        <span className="postUsername-feed">
                            <span className="publisher-post"><strong>{user?.username || "Unknown"}</strong> posted an update</span>
                            <span className="postDate">{post.date || "Unknown date"}</span>
                        </span>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc || "No description available."}</span>
                    {post.photo && (
                        <div className="postImageWrapper">
                            <img className="postImg" src={post.photo} alt="Post" />
                            {showHeart && <div className="heart-animation">❤️</div>} {/* Corazón aquí */}
                        </div>
                    )}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.commentsNumber || 0} comments</span>
                    </div>
                </div>
                <div className="post-divider-line"></div>
                <div className="love-and-comment">
                    <div className="post-love">
                        <div
                            className={isLiked ? "bb-icon-f bb-icon-heart like-post-unClicked" : "bb-icon-l bb-icon-heart"}
                            onClick={likeHandler}
                        >
                            <span className="in-love-no-color">Love</span>
                        </div>
                    </div>
                    <div className="post-comment-inner">
                        <div className="bb-icon-l bb-icon-comment-square"><span className="in-comment-inner">Comment</span></div>
                    </div>
                </div>
                <div className="post-divider-line"></div>
                <div className="post-comment">
                    <Comment comments={post.comment} />
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
                {}
            </div>
        </div>
    );
}
