import React from "react";
import style from "./Myposts.module.css"
import Post from "./Post/Post";

const Myposts = () => {
    let posts = [
        {id: 1, message: "Hi, how are yuo?", likesCount: 12},
        {id: 2, message: "t`s my first post", likesCount: 4},
    ]
    
    let postElement = posts.map((element) => <Post message={element.message} like={element.likesCount}/> )
    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default Myposts;