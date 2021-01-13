import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../style/Header.css';
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logoutUser } from "../features/UserSlice";


function Header() {

 const dispatch = useDispatch();

 const signOut= () => {
    auth.signOut().then(() => {
        dispatch(logoutUser());
    })
 }


 return (
    <div className='header'>
        <div className="header__left">
            <IconButton>
                <MenuIcon />
            </IconButton>
            <img src="https://images.news18.com/ibnlive/uploads/2020/11/1604413203_gmail_logo.jpg" alt="" className="header__image"/>
        </div>

        <div className="header__middle">
            <input placeholder='Enter message...' type="text"/>
            <ArrowDropDownIcon className='header__inputCaret' />
        </div>

        <div className="header__right"> 
            <IconButton>
                <AppsIcon />
            </IconButton>      
            <IconButton>
                <NotificationsIcon />
            </IconButton>  
            <Avatar onClick={signOut} />
        </div>
        
    </div>
    )
}

export default Header
