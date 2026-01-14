import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "admin" | "user" | "guest";

interface User {
  user_id: string;
  user_email: string;
  user_role: UserRole;
}

interface AuthState {
  user: User | null;
  token: string | null;
  is_loading: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  is_loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set_auth: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    set_is_loading: (state, action: PayloadAction<boolean>) => {
      state.is_loading = action.payload;
    },
    clear_auth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { set_auth, set_is_loading, clear_auth } = authSlice.actions;

// export const getUser = (state: RootState) => state.auth.user;
// export const getToken = (state: RootState) => state.auth.token;
// export const getIsLoading = (state: RootState) => state.auth.is_loading;

export default authSlice.reducer;
