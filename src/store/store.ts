import { configureStore } from "@reduxjs/toolkit";
import { logger } from "../middlewares/logger";
import tabsReducer from './features/Tabs/tabsSlice';

const store = configureStore({
    reducer: {
        tabs: tabsReducer,
    },
    middleware: [logger()]
});

export type RootState = ReturnType<typeof store.getState>;
export default store;