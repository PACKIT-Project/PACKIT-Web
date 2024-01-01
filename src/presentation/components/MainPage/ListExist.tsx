import Spacing from '@components/common/Spacing';
import { styled } from 'styled-components';
import Icon from '@components/common/Icon';
import useModal from '../../../application/hooks/useModal';
import Modal from '@components/common/Modal';
import COLOR from '@styles/colors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  changeCreateTripState,
  initializeCreateTripInfo,
} from '../../../application/reducer/slices/createTrip/createTripSlice';
import BottomSheet from '@components/common/BottomSheet';
import { useEffect, useState } from 'react';
import CalendarModal from './components/CalendarModal';
import TripMain from './components/TripMain';

const ListExist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isShowModal, toggleModal, closeModal } = useModal();
  const {
    isShowModal: isShowTemplate,
    toggleModal: toggleTemplate,
    closeModal: closeTemplate,
  } = useModal();
  const [clicked, setClicked] = useState(false); // 템플릿 선택 -> 선택하기 클릭 유무를 통해 캘린더 보여주기 위한 임시 값

  useEffect(() => {
    dispatch(initializeCreateTripInfo());
  }, []);

  const handleClickMenu = () => {
    toggleModal();
  };

  const handleClickCreateBtn = () => {
    navigate('/trip-create/1');
    dispatch(
      changeCreateTripState({
        type: 'state',
        value: 'main',
      })
    );
  };

  const handleClickLoadBtn = () => {
    dispatch(
      changeCreateTripState({
        type: 'state',
        value: 'main',
      })
    );
    closeModal();
    toggleTemplate();
  };
  return (
    <ListExistWrapper>
      <Spacing size={20} />
      <TripMain />
      <IconWrapper>
        {isShowModal ? (
          <Modal isVisible={isShowModal} closeModal={closeModal}>
            <MainMenu>
              <div className="button-wrapper">
                <div className="menu-box" onClick={handleClickLoadBtn}>
                  <Icon icon="Clip" />
                  여행 불러오기
                </div>
                <div className="menu-box" onClick={handleClickCreateBtn}>
                  <Icon icon="PlusCircle" />
                  새로 만들기
                </div>
              </div>
              <div className="menu-box" style={{ justifyContent: 'flex-end' }}>
                <Icon icon="MenuXButton" onClick={handleClickMenu} />
              </div>
            </MainMenu>
          </Modal>
        ) : null}
      </IconWrapper>

      <BottomSheet isVisible={isShowTemplate} closeModal={closeTemplate}>
        {clicked && (
          <CalendarModal closeModal={closeTemplate} setClicked={setClicked} />
        )}
      </BottomSheet>
    </ListExistWrapper>
  );
};

const ListExistWrapper = styled.div``;
const IconWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: fit-content;
`;
const MainMenu = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 9px;

  .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 18px 17px;
    margin-right: 4px;
    border-radius: 10px;
    background-color: ${COLOR.WHITE};
  }
  .menu-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    color: ${COLOR.GRAY_800};
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.08px;
  }
`;
export default ListExist;
