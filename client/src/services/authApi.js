import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
const url = "http://localhost:3500/";

export const SignIn = createAsyncThunk("/auth/singin", async (userInfo) => {
  try {
    const response = await Axios.post(`${url}auth/signin`, {
      username: userInfo.username,
      password: userInfo.password,
    });

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const SignUp = createAsyncThunk("auth/signup/", async (userInfo) => {
  try {
    console.log(userInfo.username, userInfo.password);
    const response = await Axios.post(`${url}auth/signup`, {
      username: userInfo.username,
      password: userInfo.password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data;
  }
});
