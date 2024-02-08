/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { setCookie } from '@utils/cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { postFCM } from '@api/notification';

const LoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get('access-token') as string;
  const memberState = searchParams.get('member-status') as string;

  const postFCMToken = async () => {
    const token = localStorage.getItem('FCMToken') as string;
    const fcmRes = await postFCM(token);
    if (fcmRes.message === '성공적으로 FCM 토큰이 저장되었습니다.') {
      localStorage.removeItem('FCMToken');
    }
  };

  useEffect(() => {
    setCookie('accessToken', accessToken, 1);
    if (memberState === 'WAITING_TO_JOIN') {
      navigate('/onboarding');
    } else {
      postFCMToken();
      navigate('/');
    }
  }, []);

  return <></>;
};

export default LoginRedirect;
