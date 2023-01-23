import React from "react";
import style from "./Myposts.module.css"
import Post from "./Post/Post";

const Myposts = (props) => {

    let postElement = props.posts.map((element) => <Post message={element.message} like={element.likesCount} key = {element.id}/> )
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