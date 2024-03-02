import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts.css";
import GlobalStyles from "./GlobalStyles";

// react-toastify
import "./components/RollingToastCustom.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// pages
import MainPage from "./pages/main";
import ListPage from "./pages/list";
import PostPage from "./pages/post";
import TestDeleteButton from "./pages/post/components/postCard/TestDeleteButton";
import PostToPage from "./pages/post-to";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/post" element={<PostToPage />} />
        <Route path="/post">
          <Route path=":recipientId" element={<PostPage />}>
            <Route path="edit" element={<TestDeleteButton />} />
          </Route>
        </Route>
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
