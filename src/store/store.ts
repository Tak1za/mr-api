import { configureStore } from "@reduxjs/toolkit";
import requestReducer from './features/Request/requestSlice';
import responseReducer from './features/Response/responseSlice';

const store = configureStore({
    reducer: {
        request: requestReducer,
        response: responseReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;