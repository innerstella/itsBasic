import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";
import PostCard from "./components/PostCard";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/test" element={<PostCard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
