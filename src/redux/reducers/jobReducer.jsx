//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { history } from '../../index';
import {TOKEN_CYBERSOFT, ACCESS_TOKEN, getStore, getStoreJson, http, saveStore, saveStoreJson, USER_LOGIN } from '../../util/config';

const initialState={
    typeJob:{},
    arrJobByName:{},
    keySearch:""
}
const jobReducer = createSlice({
    name: 'jobReducer',
    initialState,
    reducers: {
       getTypeJobAction:(state, action) => {
        state.typeJob = action.payload;
    },
    getArrJobByNameAction:(state, action) => {
      state.arrJobByName = action.payload;
  },
  getArrJobByTypeDetailAction:(state, action) => {
    state.arrJobByName = action.payload;
}
    }
});
export const {getTypeJobAction,getArrJobByNameAction,getArrJobByTypeDetailAction } = jobReducer.actions
export default jobReducer.reducer
//lấy menu loai cv
export const getMenuApi=(typeJob)=>{
    return async (dispatch) => {
        try {
          const result = await axios({
            url: "https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec",
            method: "GET",
            headers: {
                tokenCybersoft: TOKEN_CYBERSOFT ,
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
// lay-cong-viec-theo-chi-tiet-loai
export const getArrJobByTypeDetailApi=(key)=>{
  return async (dispatch) => {
      try {
        const result = await axios({
          url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${key}`,
          method: "GET",
          headers: {
              tokenCybersoft: TOKEN_CYBERSOFT ,
            }
        });
      //   Lấy dữ liệu về đưa lên redux
        const action = getArrJobByTypeDetailAction(result.data.content);
        console.log(result.data.content)
        dispatch(action);
      } catch (err) {
        console.log(err);
      }
    };
}
export const getArrJobByNameApi=(keySearch)=>{
  return async (dispatch) => {
      try {
        const result = await axios({
          url: `https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keySearch}`,
          method: "GET",
          headers: {
              tokenCybersoft: TOKEN_CYBERSOFT ,
            }
        });
      //   Lấy dữ liệu về đưa lên redux
        const action = getArrJobByNameAction(result.data.content);
        console.log(result.data.content)
        dispatch(action);
      } catch (err) {
        console.log(err);
      }
    };
}