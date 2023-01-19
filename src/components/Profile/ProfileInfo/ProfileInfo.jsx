import React from "react";
import style from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.landscapeImg}
                     src="https://www.greenfieldsprimary.school/wp-content/uploads/2018/09/greenfield-wallpaper.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>

        </div>
    )
};

export default ProfileInfo;