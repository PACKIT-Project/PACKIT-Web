/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { setCookie } from '@utils/cookie';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get('access-token') as string;
  const memberState = searchParams.get('member-status') as string;

  useEffect(() => {
    setCookie('accessToken', accessToken, 1);
    if (memberState === 'WAITING_TO_JOIN') {
      navigate('/onboarding');
    } else {
      navigate('/');
    }
  }, []);

  return <></>;
};

export default LoginRedirect;
