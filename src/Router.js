import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";
const AppRouter = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
