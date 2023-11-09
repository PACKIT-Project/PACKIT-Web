import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import TripCreatePage from '../pages/TripCreatePage';
import TripDetailPage from '../pages/TripDetailPage';
import LoginCompletePage from '../pages/LoginComplatePage';
import CheckListPage from '../pages/CheckListPage';
import MainPage from '../pages/MainPage';
import CreateComplatePage from '../pages/CreateComplatePage';
import MyPage from '../pages/MyPage';
import EditMyInfoPage from '../pages/EditMyInfoPage';
import MyTemplatePage from '../pages/MyTemplatePage';
import EditTripInfoPage from '@pages/EditTripInfoPage';
import TripRemindPage from '@pages/TripRemindPage';
import DoubleCheckPage from '@pages/DoubleCheckPage';
import LoginRedirect from '@pages/LoginPage/LoginRedirect';
import EmailAuthPage from '@pages/EmailAuthPage';
import OnBoardingPage from '@pages/OnBoardingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/init" element={<OnBoardingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/auth" element={<LoginRedirect />} />
        <Route path="/login/complate" element={<LoginCompletePage />} />
        <Route path="/email-auth" element={<EmailAuthPage />} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
        <Route path="/trip-create/complate" element={<CreateComplatePage />} />
        <Route path="/trip-update/:tripId" element={<EditTripInfoPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/trip/:tripId" element={<TripDetailPage />} />
        <Route path="/mypage/edit" element={<EditMyInfoPage />} />
        <Route path="/my-template" element={<MyTemplatePage />} />
        <Route path="/checklist/:id" element={<CheckListPage />} />
        <Route path="/remind/:id" element={<TripRemindPage />} />
        <Route path="/doublecheck/:tripid" element={<DoubleCheckPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
