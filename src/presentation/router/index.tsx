import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TripCreatePage from "../pages/TripCreatePage";
import TripDetailPage from "../pages/TripDetailPage";
import LoginCompletePage from "../pages/LoginComplatePage";
import MainPage from "../pages/MainPage";
import CreateComplatePage from "../pages/CreateComplatePage";
import JoinPage from "../pages/JoinPage";
import MyPage from "../pages/MyPage";
import EditMyInfoPage from "../pages/EditMyInfoPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/complate" element={<LoginCompletePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
        <Route path="/trip-create/complate" element={<CreateComplatePage />} />
        <Route path="/trip/:trip-id" element={<TripDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<EditMyInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
