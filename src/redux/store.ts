import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices";
export const store = configureStore({
	reducer: {
		todo: todoSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
