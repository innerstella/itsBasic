import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./pages/main";
import GlobalStyles from "./GlobalStyles";
import "./fonts.css";
import "./components/RollingToastCustom.css";
import ListPage from "./pages/list";
import PostPage from "./pages/post";
import { ToastContainer } from "react-toastify";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/list' element={<ListPage />} />
        <Route path='post'>
          <Route path=':recipientId' element={<PostPage />} />
        </Route>
      </Routes>
      <ToastContainer
        className='font-16-regular'
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </BrowserRouter>
  );
};

export default AppRouter;
