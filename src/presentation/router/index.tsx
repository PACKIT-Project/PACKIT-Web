import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import TripCreatePage from '../pages/TripCreatePage';
import LoginCompletePage from '../pages/LoginCompletePage';
import MainPage from '../pages/MainPage';
import CreateComplatePage from '../pages/CreateComplatePage';
import MyPage from '../pages/MyPage';
import EditMyInfoPage from '../pages/EditMyInfoPage';
import TripRemindPage from '@pages/TripRemindPage';
import LoginRedirect from '@pages/LoginPage/LoginRedirect';
import OnBoardingPage from '@pages/OnBoardingPage';
import OnBoardingProfilePage from '@pages/OnBoardingPage/profile';
import TermsPage from '@pages/OnBoardingPage/terms';
import TermsDetailPage from '@pages/OnBoardingPage/detail';
import SettingPage from '@pages/SettingPage';
import ManageTodoPage from '@pages/ManageTodoPage';
import FeedPage from '@pages/FeedPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/onboarding" element={<OnBoardingPage />} />
        <Route path="/onboarding/terms" element={<TermsPage />} />
        <Route path="/onboarding/terms/:detail" element={<TermsDetailPage />} />
        <Route path="/onboarding/profile" element={<OnBoardingProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/auth" element={<LoginRedirect />} />
        <Route path="/login/complete" element={<LoginCompletePage />} />
        <Route path="/trip-create/:step" element={<TripCreatePage />} />
        <Route path="/trip-create/complate" element={<CreateComplatePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/my/edit" element={<EditMyInfoPage />} />
        <Route path="/remind/:id" element={<TripRemindPage />} />
        <Route path="/edit/:tripid" element={<ManageTodoPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
