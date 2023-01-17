import React from "react";
import style from "./Myposts.module.css"
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message = 'Hi, how are yuo?' like = '20'/>
                <Post message = "it`s my first post" like = '15'/>
            </div>
        </div>
    )
};

export default Myposts;