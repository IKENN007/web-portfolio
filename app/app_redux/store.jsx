import { configureStore } from "@reduxjs/toolkit";

import profileReducer from './reducer/profile';

export default configureStore({
    reducer: {
        profile: profileReducer
    }
})