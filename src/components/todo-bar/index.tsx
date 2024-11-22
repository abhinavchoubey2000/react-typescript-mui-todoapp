import {
	Paper,
	Stack,
	Checkbox,
	Button,
	Typography,
	TextField,
} from "@mui/material";
import { Delete, Save, Cancel } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, checkTodo } from "../../redux/slices";

export function TodoBar({ id, todo, isCompleted }: PropInterface) {
	const [text, setText] = useState<string>(todo);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const dispatch = useDispatch();

	const triggerDeleteTodo = (todoId: number) => {
		dispatch(deleteTodo(todoId));
	};

	const triggerEditTodo = (todoId: number, editedText: string) => {
		dispatch(editTodo({ id: todoId, text: editedText }));
		setIsEdit(false);
	};

	const triggerCheckBox = (todoId: number) => {
		dispatch(checkTodo({ id: todoId, checked: !isCompleted }));
	};

	return !isEdit ? (
		<Paper
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "8px 6px",
			}}
		>
			<Stack direction={"row"} alignItems={"center"}>
				<Checkbox
					onChange={() => {
						triggerCheckBox(id);
					}}
				/>
				<Typography
					sx={
						!isCompleted
							? { textDecoration: "none", opacity: 1 }
							: { textDecoration: "line-through", opacity: 0.6 }
					}
				>
					{todo}
				</Typography>
			</Stack>
			<Stack direction={"row"} alignItems={"center"}>
				<Button
					onClick={() => {
						setIsEdit(true);
					}}
				>
					<Typography>Edit</Typography>
				</Button>
				<Button
					color="error"
					onClick={() => {
						triggerDeleteTodo(id);
					}}
				>
					<Delete />
				</Button>
			</Stack>
		</Paper>
	) : (
		<Paper
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "5px 8px",
			}}
		>
			<TextField
				label="Edit text"
				variant="standard"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>

			<Stack direction={"row"} alignItems={"center"}>
				<Button
					onClick={() => {
						triggerEditTodo(id, text);
					}}
				>
					<Save />
				</Button>
				<Button
					color="error"
					onClick={() => {
						setIsEdit(false);
					}}
				>
					<Cancel />
				</Button>
			</Stack>
		</Paper>
	);
}
