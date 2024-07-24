import {createSlice} from '@reduxjs/toolkit';
import SignIn from '../../pages/SignIn';

const initialState = {
    currentUser:null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        SignInstart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const {SignInstart,signInSuccess,signInFailure} = userSlice.actions;
export default userSlice.reducer;