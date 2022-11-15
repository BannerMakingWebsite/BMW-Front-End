import { useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsPrivacy from "../Privacy";

function ModalContentsRegister() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Background>
        <ModalInput type="big" label="닉네임" id="name" />
        <ModalInput type="doublePassword" id="pw" />
        <ModalInput type="doubleEmail" id="email" />
        <ModalInput
          type="checkbox"
          label={"BMW의 *개인정보 처리방침*에 동의합니다."}
          id="agree"
          changeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            (buttonRef.current.disabled = !e.target.checked)
          }
          onClick={() =>
            setModalState({
              title: "개인정보 처리방침",
              modalContents: <ModalContentsPrivacy />,
            })
          }
        />

        <Button type="big" label="회원가입" refObj={buttonRef} />
      </Background>
    </>
  );
}

export default ModalContentsRegister;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
