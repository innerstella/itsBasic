import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";

import ListPage from "./pages/list";
import RollingMessageModal from "./pages/post/components/RollingMessageModal";
import { ToastContainer } from "react-toastify";
const AppRouter = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/list" element={<ListPage />} />
				<Route path="/modalTest" element={<RollingMessageModal />} />
			</Routes>
			<ToastContainer
				className="font-16-regular"
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</BrowserRouter>
	);
};

export default AppRouter;
