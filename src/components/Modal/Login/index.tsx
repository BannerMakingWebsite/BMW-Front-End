import { useRef, useState } from "react";
import styled from "styled-components";
import { Google } from "../../../assets/images";

function ModalContentsLogin() {
  const [idWarning, setIdWarning] = useState<string>("");
  const [pwWarning, setPwWarning] = useState<string>("");
  const idRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const checkValidity = () => {
    if (idRef.current && pwRef.current) {
      console.log(idRef.current.value);
      console.log(pwRef.current.value);
      if (idRef.current.value === "") setIdWarning("값을 입력해주세요.");
      else setIdWarning("");
      if (pwRef.current.value === "") setPwWarning("값을 입력해주세요.");
      else setPwWarning("");
    }
  };

  return (
    <>
      <Background>
        <div>
          <LabelWrapper>
            <label htmlFor="id">이메일</label>
            {idWarning !== "" && <span>{idWarning}</span>}
          </LabelWrapper>
          <Input id="id" ref={idRef} />
        </div>
        <div>
          <LabelWrapper>
            <label htmlFor="pw">비밀번호</label>
            {pwWarning !== "" && <span>{pwWarning}</span>}
          </LabelWrapper>
          <Input id="pw" type="password" ref={pwRef} />
        </div>
        <div>
          <CheckboxWrapper>
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">아이디 기억</label>
          </CheckboxWrapper>
          <button onClick={() => checkValidity()}>시작</button>
        </div>
        <GoogleWrapper>
          <img src={Google} alt="google login" />
          구글 계정으로 로그인
        </GoogleWrapper>
        <ExternalWrapper>
          <span>계정이 없으시다면?</span>
          <strong>회원가입</strong>
        </ExternalWrapper>
        <ExternalWrapper>
          <strong>비밀번호를 잊으셨나요?</strong>
        </ExternalWrapper>
      </Background>
    </>
  );
}

export default ModalContentsLogin;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  button {
    background-color: ${({ theme }) => theme.colors.bg1f};

    width: 39rem;
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};

    border: 0.1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 1.5rem;
    cursor: pointer;
    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const LabelWrapper = styled.label`
  margin-bottom: 0.5rem;

  height: 2rem;

  display: flex;
  align-items: flex-end;

  > label {
    margin-right: 0.625rem;

    width: max-content;

    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }

  > span {
    color: ${({ theme }) => theme.colors.error};
    font-size: ${({ theme }) => theme.fontSizes.text};

    @keyframes fadeIn {
      0% {
        color: #fefefe;
      }
      100% {
        color: #ff0000;
      }
    }

    animation: fadeIn 0.5s ease;
  }
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.bg1f};

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-bottom: 1.5rem;

  width: 39rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  border-radius: 1.5rem;
  border: 0.1px solid ${({ theme }) => theme.colors.grey};

  ::-ms-reveal {
    filter: invert(100%);
  }
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  > input {
    transform: translateY(0.1rem);

    margin-right: 0.625rem;

    width: ${({ theme }) => theme.fontSizes.subTitle};
    height: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;

const ExternalWrapper = styled.div`
  margin-top: 1.5rem;

  display: flex;

  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  span {
    margin-right: 0.625rem;
  }

  strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const GoogleWrapper = styled.div`
  position: fixed;

  transform: translateY(21rem);

  background-color: ${({ theme }) => theme.colors.bg1f};

  margin-top: 1.5rem;

  width: 39rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  border: 0.1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1.5rem;
  cursor: pointer;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  img {
    transform: translateY(0.05rem);

    margin-right: 0.625rem;

    width: 2.5rem;
    height: 2.5rem;
  }
`;
