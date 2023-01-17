import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://coolsen.ru/wp-content/uploads/2021/09/168.jpg"/>
            {props.message}
            <div>
                <span>Like</span> {props.like}
            </div>
        </div>
    )
};

export default Post;