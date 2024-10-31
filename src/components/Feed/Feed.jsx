import React from 'react';
import Post from "../Post/Post";
// import Share from "../Share/Share";
import "./Feed.css";
import { Posts } from "../../assets/dummyData/dummyData";

export default function Feed() {
    return (
        <section className="feed">
            <div className="feedWrapper">
                {/* <Share /> */}
                {Posts.map((p) => (
                    <article key={p.id} className="feedPost">
                        <Post post={p} />
                    </article>
                ))}
            </div>
        </section>
    );
}
