import React, { useState } from "react";
import Button from "@components/common/Button";
import Spacing from "@components/common/Spacing";
import Text from "@components/common/Text";
import COLOR from "@styles/colors";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon from "@components/common/Icon";
import Toast from "@components/common/Toast";

const ShareModal = ({ closeModal }: { closeModal: () => void }) => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    closeModal();
    navigate("/login");
  };

  return (
    <ShareModalWrapper>
      <Text
        text="공유하기"
        color="#191F28"
        fontSize={20}
        lineHeight="28px"
        fontWeight={700}
      />
      <Spacing size={23} />
      <ButtonWrapper>
        <TextWrapper>
          <Icon icon="KakaoLogo" />
          <Text
          text="카카오톡"
          color={COLOR.GRAY_800}
          fontSize={15}
          lineHeight="20px"
          fontWeight={600}
        />
        </TextWrapper>
        <TextWrapper>
          <Icon icon="LinkOutlined" />
          <Text
          text="URL복사"
          color={COLOR.GRAY_800}
          fontSize={15}
          lineHeight="20px"
          fontWeight={600}
        />
        </TextWrapper>
      </ButtonWrapper>
    </ShareModalWrapper>
  );
};


const DeleteModal = ({ closeModal }: { closeModal: () => void }) => {
    const navigate = useNavigate();
    const [isToast, setIsToast] = useState(false);

    const handleClickLogout = () => {
      
      navigate("/");

    };
  
    return (
      <ShareModalWrapper>
        <Text
          text="여행을 삭제할까요?"
          color="#191F28"
          fontSize={20}
          lineHeight="28px"
          fontWeight={700}
        />
        <Spacing size={10} />
        <Text
          text="리스트 삭제 후 복구가 불가능합니다"
          color="#6B7684"
          fontSize={15}
          lineHeight="22px"
          fontWeight={500}
        />
        <Spacing size={30} />
        <DeleteButtonWrapper>
          <Button
            width=""
            border="none"
            background="#F2F4F6"
            color="#505967"
            radius={12}
            padding="17px"
            onClick={() => closeModal()}
            clicked="true"
            customstyle={{minWidth : "80px"}}
          >
            <Text
            text="취소"
            color="#505967"
            fontSize={17}
            lineHeight="20.4px"
            fontWeight={600}
            />
          </Button>
          <Button
            width=""
            border="none"
            background={COLOR.MAIN_GREEN}
            color={COLOR.WHITE}
            radius={12}
            padding="17px"
            onClick={handleClickLogout}
            clicked="true"
            customstyle={{minWidth : "80px"}}
          >
             <Text
            text="삭제하기"
            color={COLOR.WHITE}
            fontSize={17}
            lineHeight="20.4px"
            fontWeight={600}
            />
          </Button>
        </DeleteButtonWrapper>
        {isToast && <Toast close={()=>{}}>어ㅏㅣ너리ㅏㄴ얼</Toast>}
        
      </ShareModalWrapper>
    );
  };

const ShareModalWrapper = styled.div`
  padding: 22px 47.42px;
  border-radius: 14px;
  background-color: ${COLOR.WHITE};
  box-shadow: 0px 0px 9.899947166442871px 0px rgba(133, 133, 133, 0.38);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonWrapper = styled.div`
    all : unset;
    border : 0px; 
    display: flex;
    flex-direction: row;
    gap: 41px;
`;

const DeleteButtonWrapper = styled.div`
    width: 100%;
    all : unset;
    border : 0px; 
    display: flex;
    gap: 8px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export { ShareModal, DeleteModal } ;
