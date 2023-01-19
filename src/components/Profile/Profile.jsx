import React from "react";
import style from "./Profile.module.css"
import Myposts from "./MyPosts/Myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Myposts/>
        </div>
    )
};

export default Profile;