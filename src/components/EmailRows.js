import React from 'react';
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import '../style/EmailRows.css';
import { useHistory } from 'react-router-dom';
import { setEmailListings } from "../features/MailSlicer";
import { useDispatch } from "react-redux"; 


function EmailRows({ id, title, subject, description, time }) {


    const history = useHistory(); 
    const dispatch = useDispatch();


    const saveEmail = () =>  {
        dispatch(
        setEmailListings({            
            id, 
            title, 
            subject,
            description, 
            time
        })
        )
             history.push('/mail')
    }

    return (
        
        <div className="emailRows" onClick={()=> saveEmail() }>

            <div className="emailRows__options">
            <Checkbox  />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
            </div>

            <h3 className="emailRows__title">
            {title}
            </h3>

            <div className="emailRows__message">
            <h4>
                {subject}{" "}
                <span className="emailRows__description">-{' '}
                    {description}
                </span>
            </h4>
            </div>

            <p className="emailRows__time">
            {time}
            </p>

        </div>
    )
}

export default EmailRows
