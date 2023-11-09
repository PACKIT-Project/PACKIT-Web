import React from 'react';
import BottomButton from '@components/common/BottomButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Step1 from '@components/OnBoardingPage/Step1';
import Step2 from '@components/OnBoardingPage/Step2';
import Step3 from '@components/OnBoardingPage/Step3';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <OnBoardingWrapper>
      <CustomSlider {...settings}>
        <Step1 />
        <Step2 />
        <Step3 />
      </CustomSlider>
      <BottomButton text="시작하기" onClick={() => navigate('/')} />
    </OnBoardingWrapper>
  );
};

export default OnBoardingPage;

const OnBoardingWrapper = styled.div`
  height: 100%;
`;

const CustomSlider = styled(Slider)`
  top: 25%;
  padding: 0 25px;
  align-items: center;

  .slick-dots {
    width: 100%;
    left: 0;
  }
  .slick-dots li.slick-active button::before {
    color: #0ab6ff;
  }
  .slick-dots li button::before {
    color: #d9d9d9;
    opacity: 1;
  }
`;
