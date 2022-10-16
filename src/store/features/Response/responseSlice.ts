import { createSlice } from "@reduxjs/toolkit";

export const responseSlice = createSlice({
    name: "response",
    initialState: {
        responseBody: null,
        responseStatus: "",
        isLoading: false
    },
    reducers: {
        setResponseBody: (state, action) => {
            state.responseBody = action.payload
        },
        setResponseStatus: (state, action) => {
            state.responseStatus = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        resetResponse: (state) => {
            state.responseBody = null;
            state.responseStatus = "";
        }
    }
});

export const {setResponseBody, setResponseStatus, setIsLoading, resetResponse} = responseSlice.actions

export default responseSlice.reducer