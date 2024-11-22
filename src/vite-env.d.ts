/// <reference types="vite/client" />
interface TodoArrayInterface {
	todoInput: string;
	isCompleted: boolean;
	id: number;
}
interface EditObjectInterface {
	id: number;
	text: string;
}
interface CheckTodoObjectInterface {
	id: number;
	checked: boolean;
}
interface StateInterface {
	todoArray: Array<TodoArrayInterface>;
	todoInput: string;
}
interface PropInterface {
	id: number;
	todo: string;
	isCompleted: boolean;
}
