import { createSlice } from "@reduxjs/toolkit";
import { SignIn, SignUp } from "../../services/authApi";
import { setCookie, getCookie } from "../../utils/cookieUtils";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
    clearAuthMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignIn.fulfilled, (state, action) => {
        const { token } = action.payload;
        setCookie("token", token, 1);
        state.status = "succeeded";
        state.user = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(SignIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(SignUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.message = action.payload.message;
        state.error = null;
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearAuthError, clearAuthMessage } = authSlice.actions;
export default authSlice.reducer;
