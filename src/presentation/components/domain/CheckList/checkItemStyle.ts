import { styled } from 'styled-components';
import Color from '@styles/colors';
import COLOR from '@styles/colors';

const AddCheckItemWrapper = styled.button`
  all: unset;
  border: 2px solid #e9ecf0;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: ${Color.GRAY_500};
  padding-left: 13px;
`;

const CheckItemContainer = styled.div<{ isChecked: boolean }>`
  height: 40px;
  border: 2px solid #e9ecf0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ isChecked }) =>
    isChecked ? `${Color.GRAY_100}` : `${Color.WHITE}`};
  margin-bottom: 10px;
`;

const CheckItemWrapper = styled.div`
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
`;

const CheckButton = styled.button<{ checked: boolean }>`
  all: unset;
  min-width: 14px;
  min-height: 14px;
  border-radius: 4px;
  background: linear-gradient(#35d59b, #00e6af);
  margin-left: 11px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyButton = styled.button<{ checked: boolean }>`
  all: unset;
  min-width: 12.3px;
  min-height: 12.3px;
  border-radius: 4px;
  border: 1.7px solid #e9ecf0;
  margin-left: 11px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div<{ isChecked: boolean }>`
  margin-left: 10px;
  font-weight: 500;
  font-size: 15px;
`;

const IconWrapper = styled.button`
  all: unset;
  border: 0px;
  padding-right: 8px;
`;

const InputWrapper = styled.input<{ isChecked: boolean }>`
  width: 100%;
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }

  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: ${COLOR.GRAY_900};

  ${({ isChecked }) => isChecked && `text-decoration:line-through`};
  ${({ isChecked }) =>
    isChecked ? `color: ${Color.GRAY_400}` : `color: ${Color.MAIN_BLACK}`};
`;

export {
  CheckButton,
  EmptyButton,
  AddCheckItemWrapper,
  CheckItemContainer,
  CheckItemWrapper,
  Description,
  IconWrapper,
  InputWrapper,
};
