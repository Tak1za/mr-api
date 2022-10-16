import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
    name: "request",
    initialState: {
        protocol: "http://",
        url: "",
        requestType: "get",
        requestBody: "",
    },
    reducers: {
        setProtocol: (state, action) => {
            state.protocol = action.payload
        },
        setUrl: (state, action) => {
            state.url = action.payload
        },
        setRequestType: (state, action) => {
            state.requestType = action.payload
        },
        setRequestBody: (state, action) => {
            state.requestBody = action.payload
        },
        resetRequest: (state) => {
            state.protocol = "http://";
            state.url = ""; 
            state.requestType = "get";
            state.requestBody = ""
        }
    }
});

export const {setProtocol, setUrl, setRequestType, setRequestBody, resetRequest} = requestSlice.actions

export default requestSlice.reducer