import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
    userId: string,
    role: string,
    iat: number,
    exp: number,
    userEmail: string,
};
export type TUserInfo = {
    firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: 'admin' | 'customer',
  status: 'active' | 'disabled',
  isDeleted: boolean,
}
type TAuthState = {
    user: null | TUser;
    token: null | string;
}
const initialState: TAuthState = {
    user: null,
    token: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        },
    }
})
export const { setUser, logOut } = authSlice.actions;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;