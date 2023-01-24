import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.posts.map((element) => <Post message={element.message} like={element.likesCount}
                                                         key={element.id}/>)

    let newPostElement = React.createRef();
    let addPosts = () => {

        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts;