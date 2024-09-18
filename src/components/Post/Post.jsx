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
                        <div className={isLiked? "bb-icon-l bb-icon-heart" : "bb-icon-f bb-icon-heart like-post-unClicked"}  onClick={likeHandler}></div>
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.commentsNumber || 0} comments</span>
                    </div>
                </div>
                <div className="postComments">
                    {post.comment.map((comment, i) => (
                        <span key = {i}>
                        <div className="profile-comment"> 
                            <div className="profile-picture-comment">
                                <img
                                className="postProfileImg"
                                src={comment?.profilePicture || "default-profile.png"} // Imagen predeterminada si falta la imagen
                                alt=""
                                />
                            </div>
                            <div className="text-comment">
                                <span className="postUsername">{comment?.profileUsername || "Unknown"}</span>
                                <br/>
                                {comment.comment}
                            </div>
                            <div className="relleno-comment"></div>
                        </div>
                        </span>
                    ))}

                </div>
            </div>
        </div>
    );
}