import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar friend={props.state.sideBar} />
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/" element={<Profile posts = {props.state.profilePage.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs = {props.state.dialogsPage.dialogs}  messages ={props.state.dialogsPage.messages}  />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
