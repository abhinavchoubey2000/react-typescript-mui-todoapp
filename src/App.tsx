import {
	Container,
	AppBar,
	Typography,
	Toolbar,
	TextField,
	Stack,
	Button,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { TodoBar } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addTodo, handleTodoInput } from "./redux/slices";

export default function App() {
	const { todoArray, todoInput } = useSelector(
		(state: RootState) => state.todo
	);
	const dispatch = useDispatch();

	const triggerAddTodo = () => {
		dispatch(addTodo({ todoInput, isCompleted: false, id: todoArray.length }));
		dispatch(handleTodoInput(""));
	};

	return (
		<Container maxWidth="sm" sx={{ height: "100vh" }}>
			<AppBar position="static">
				<Toolbar>
					<Typography>React + TypeScript - Todo App</Typography>
				</Toolbar>
			</AppBar>
			<Stack
				height={"80%"}
				padding={"8px 10px"}
				direction={"column"}
				spacing={"1rem"}
			>
				{todoArray.map((value, index) => {
					return (
						<TodoBar
							key={index}
							todo={value.todoInput}
							id={value.id}
							isCompleted={value.isCompleted}
						/>
					);
				})}
			</Stack>
			<Stack direction={"row"} spacing={"1rem"}>
				<TextField
					fullWidth
					label="Add task"
					value={todoInput}
					onChange={(e) => {
						dispatch(handleTodoInput(e.target.value));
					}}
				/>
				<Button variant="contained" onClick={triggerAddTodo}>
					<Add />
				</Button>
			</Stack>
		</Container>
	);
}
