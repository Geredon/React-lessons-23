import React from "react";
import style from "./Profile.module.css"
import Myposts from "./MyPosts/Myposts";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img className={style.landscapeImg}
                     src="https://www.greenfieldsprimary.school/wp-content/uploads/2018/09/greenfield-wallpaper.jpg"/>
            </div>
            <div>
                ava + description
            </div>
           <Myposts />
        </div>
    )
};

export default Profile;