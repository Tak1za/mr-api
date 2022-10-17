import { createSlice } from "@reduxjs/toolkit";
import { ITabData } from "../../types/tabData";
import { v4 as uuidv4 } from 'uuid';

const initialState: {
    allTabs: ITabData[];
    isLoading: boolean;
} = {
    allTabs: [],
    isLoading: false
};

export const tabsSlice = createSlice({
    name: "tabs",
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setName: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                name: action.payload.value,
            } 
        },
        setProtocol: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                protocol: action.payload.value
            }
        },
        setUrl: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                url: action.payload.value,
            }
        },
        setRequestType: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                requestType: action.payload.value,
            }
        },
        setRequestBody: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                requestBody: action.payload.value,
            }
        },
        setResponseStatus: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                responseStatus: action.payload.value
            }
        },
        setResponseBody: (state, action) => {
            state.allTabs[action.payload.index] = {
                ...state.allTabs[action.payload.index],
                responseBody: action.payload.value
            }
        },
        addTab: (state) => {
            state.allTabs = [
                ...state.allTabs,
                {
                    tabKey: `newTab${state.allTabs.length}`,
                    id: uuidv4(),
                    name: "",
                    protocol: "http://",
                    url: "",
                    requestType: "get",
                    requestBody: "",
                    responseStatus: "",
                    responseBody: null
                },
            ];
        },
        removeTab: (state, action) => {
            state.allTabs = state.allTabs.filter(tab => tab.tabKey !== action.payload);
        }
    },
});

export const {
    setIsLoading,
    setName,
    setProtocol,
    setUrl,
    setRequestType,
    setRequestBody,
    setResponseStatus,
    setResponseBody,
    addTab,
    removeTab
} = tabsSlice.actions;

export default tabsSlice.reducer;
