import React from 'react';
import { Button, IconButton } from "@material-ui/core";
import '../style/SideBar.css';
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NearMeIcon from '@material-ui/icons/NearMe';
import PhoneIcon from '@material-ui/icons/Phone';
import DuoIcon from '@material-ui/icons/Duo';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch } from "react-redux";
import { openSendMessageBox } from "../features/MailSlicer";


function SideBar() {

const dispatch = useDispatch();

    return (
        <div className='sidebar'> 
        <Button 
        onClick={()=> dispatch(openSendMessageBox())}
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'         > 
        Compose
        </Button>
        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected />    
        <SidebarOption Icon={StarIcon} title='Starred' number={24}/>   
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={24}/>    
        <SidebarOption Icon={LabelImportantIcon} title='Important' number={24}/>    
        <SidebarOption Icon={NearMeIcon} title='Sent' number={24}/>    
        <SidebarOption Icon={NoteIcon} title='Drafts' number={24}/>    
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={24}/>    
 
        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
        </div>
    )
}

export default SideBar 
