import React from 'react';
import Post from "../Post/Post";
import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../assets/dummyData/dummyData";

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <Share /> */}
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
}