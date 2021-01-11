import { configureStore } from '@reduxjs/toolkit';
import mailReducer from "../features/MailSlicer";
import userReducer from "../features/MailSlicer";



export default configureStore({ 
    reducer: {
        mail: mailReducer,
        user: userReducer,
    },
});