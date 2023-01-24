import {NavLink} from "react-router-dom";
import style from "./Friends.module.css"

const FriendsItem = (props) => {
    return (
        <div className={style.friendsItem}>
            <NavLink to="/">
                {props.img} <br/>
                {props.name}
            </NavLink>
        </div>
    )
}

const Friends = (props) => {
    let friend = props.friend.map(f => <FriendsItem img={f.img} name={f.name} id={f.id} key={f.id}/>)
    return (
        <div>
            <div className={style.heading}>
                <h4>Friends</h4>
            </div>
            <div className={style.wrapperFriends}>
                {friend}
            </div>
        </div>
    )
}
export default Friends;