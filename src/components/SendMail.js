import React from 'react';
import '../style/SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { closeSendMessageBox } from "../features/MailSlicer";
import { useDispatch } from "react-redux";
import { db } from "./firebase"; 
import firebase from "firebase"; 


function SendMail() {

    const { register, handleSubmit, reset , errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit= (formData)=> {
        console.log(formData);
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        dispatch(closeSendMessageBox());
        reset();
    }


    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className='sendMail__close' 
                onClick={()=> dispatch(closeSendMessageBox())}
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} >
                <input name="to"
                 placeholder='To'
                 type="text" className=""                
                 ref={register({ required: 'To is required' })} /> 
                 <span className="sendmail__errorMessage"> {errors.to && errors.to.message}</span>


                <input name="subject"
                placeholder='Subject'
                type="text"                 
                ref={register({ required: 'Subject is required' })} /> 
                <span className="sendmail__errorMessage"> {errors.subject && errors.subject.message}</span>

                

                <input name="message"
                placeholder='Message...'
                type="text" 
                className="sendMail__message"               
                ref={register({ required: 'Message is required' })} /> 
                <span className="sendmail__errorMessage"> {errors.message && errors.message.message}</span>



                <div className="sendMail__options">
                    <Button 
                    className='sendMail__send'
                    variant='contained'
                    color='primary'
                    type='submit'
                    >Send</Button>
                </div>                
            </form>
        </div>
    )
}

export default SendMail
