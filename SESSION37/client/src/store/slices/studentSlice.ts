import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser = createAsyncThunk("student/getAllUser",async()=>{
    try{
        const response = await axios.get("http://localhost:8080/students");
        return response.data;
    }catch(error){
        console.log(error);
    }
})

export const studentSlice = createSlice({
    name:"student",
    initialState:{
        students:[],
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllUser.pending,()=>{
            //dang lay du lieu
            console.log("dang lay du lieu");

        })
        .addCase(getAllUser.fulfilled,(state,action)=>{
            //lay du lieu thanh cong
            console.log("lay du lieu thanh cong");
        })
    }
})