import { useRef } from "react";
import styled from "styled-components";
import Button from "../../button";
import InputField from "../../input";

function ModalContentsRegister() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Background>
        <InputField type="big" label="닉네임" id="name" />
        <InputField type="doublePassword" id="pw" />
        <InputField type="doubleEmail" id="email" />
        <InputField
          type="checkbox"
          label={"BMW의 *개인정보 처리방침*에 동의합니다."}
          id="agree"
          changeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            (buttonRef.current.disabled = !e.target.checked)
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
