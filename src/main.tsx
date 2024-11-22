import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App.tsx";
import { store } from "./redux/store.ts";
import { theme } from "./theme.ts";
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<CssBaseline />
				<App />
			</Provider>
		</ThemeProvider>
	</StrictMode>
);
