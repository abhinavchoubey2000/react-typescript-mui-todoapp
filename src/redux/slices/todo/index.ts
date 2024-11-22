import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: StateInterface = {
	todoArray: [],
	todoInput: "",
};
export const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TodoArrayInterface>) => {
			state.todoArray.push(action.payload);
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			state.todoArray.splice(action.payload, 1);
		},
		editTodo: (state, action: PayloadAction<EditObjectInterface>) => {
			state.todoArray.splice(action.payload.id, 1, {
				isCompleted: false,
				todoInput: action.payload.text,
				id: action.payload.id,
			});
		},
		checkTodo: (state, action: PayloadAction<CheckTodoObjectInterface>) => {
			state.todoArray = state.todoArray.map((val) => {
				return val.id === action.payload.id
					? { ...val, isCompleted: action.payload.checked }
					: val;
			});
		},
		handleTodoInput: (state, action: PayloadAction<string>) => {
			state.todoInput = action.payload;
		},
	},
});
export const { addTodo, deleteTodo, editTodo, handleTodoInput, checkTodo } =
	todoSlice.actions;
