import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";
import ListPage from "./pages/list";
import PostToPage from "./pages/post-to";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<PostToPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
