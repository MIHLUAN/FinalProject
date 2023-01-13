//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { history } from '../../index';
import {TOKEN_CYBERSOFT, ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN } from '../../util/config';

const initialState={
    typeJob:{},
}
const jobReducer = createSlice({
    name: 'jobReducer',
    initialState,
    reducers: {
       getTypeJobAction:(state, action) => {
        state.typeJob = action.payload;
    }
    }
});
export const {getTypeJobAction } = jobReducer.actions
export default jobReducer.reducer
//lấy menu loai cv
export const getMenuApi=(typeJob)=>{
    return async (dispatch) => {
        try {
          const result = await axios({
            url: "https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec",
            method: "GET",
            headers: {
                tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c" ,
              }
          });
        //   Lấy dữ liệu về đưa lên redux
          const action = getTypeJobAction(result.data.content);
          console.log(result.data.content)
          dispatch(action);
        } catch (err) {
          console.log(err);
        }
      };
}