import React, { useRef, useState } from "react";
import styled from "styled-components";

function ModalContentsRegister() {
  const [pwLabelIndex, setPwLabelIndex] = useState<number>(0);
  const [mailLabelIndex, setMailLabelIndex] = useState<number>(0);
  const [pwValue, setPwValue] = useState<string[]>([]);
  const [mailValue, setMailValue] = useState<string[]>([]);
  const [nameWarning, setNameWarning] = useState<string>("");
  const [pwWarning, setPwWarning] = useState<string>("");
  const [mailWarning, setMailWarning] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Background>
        <div>
          <LabelWrapper labelIndex={0}>
            <label htmlFor="name">닉네임</label>
            {nameWarning !== "" && <span>{nameWarning}</span>}
          </LabelWrapper>
          <Input id="name" ref={nameRef} />
        </div>
        <div>
          <LabelWrapper labelIndex={pwLabelIndex}>
            <label
              tabIndex={0}
              htmlFor="pw"
              onClick={() => setPwLabelIndex(0)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setPwLabelIndex(0);
              }}
            >
              비밀번호
            </label>
            <label
              tabIndex={0}
              htmlFor="pw"
              onClick={() => setPwLabelIndex(1)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setPwLabelIndex(1);
              }}
            >
              비밀번호 재입력
            </label>
            {pwWarning && <span>{pwWarning}</span>}
          </LabelWrapper>
          <Input
            key={pwLabelIndex}
            id="pw"
            type="password"
            minLength={8}
            maxLength={24}
            placeholder="길이 8 ~ 24 글자, 알파벳과 숫자, 특수문자 조합"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              {
                const temp: string[] = [...pwValue];
                temp[pwLabelIndex] = e.currentTarget.value;
                setPwValue(temp);
              }
            }}
            value={pwValue[pwLabelIndex]}
          />
        </div>
        <div>
          <LabelWrapper labelIndex={mailLabelIndex}>
            <label
              tabIndex={0}
              htmlFor="mail"
              onClick={() => setMailLabelIndex(0)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setMailLabelIndex(0);
              }}
            >
              이메일
            </label>
            <label
              tabIndex={0}
              htmlFor="mail"
              onClick={() => setMailLabelIndex(1)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setMailLabelIndex(1);
              }}
            >
              인증 코드
            </label>
            {mailWarning && <span>{mailWarning}</span>}
          </LabelWrapper>
          <div>
            <Input
              key={mailLabelIndex}
              type={mailLabelIndex === 0 && "email"}
              id="mail"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                {
                  const temp: string[] = [...mailValue];
                  temp[mailLabelIndex] = e.currentTarget.value;
                  setMailValue(temp);
                }
              }}
              value={mailValue[mailLabelIndex]}
              isOverlaid={mailLabelIndex === 0 && true}
              autoComplete={"DoNotAutoComplete"}
            />
            {mailLabelIndex === 0 && <Overlay>인증 번호 발송</Overlay>}
          </div>
        </div>
        <div>
          <CheckboxWrapper>
            <input
              id="remember"
              type="checkbox"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                (buttonRef.current.disabled = !e.target.checked)
              }
            />
            <label htmlFor="remember">
              BMW의 <strong>개인정보 처리방침</strong> 에 동의합니다.
            </label>
          </CheckboxWrapper>
          <button type="submit" disabled ref={buttonRef}>
            회원가입
          </button>
        </div>
      </Background>
    </>
  );
}

export default ModalContentsRegister;

const Background = styled.form`
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

    :disabled {
      filter: brightness(50%);
    }

    :enabled {
      ${({ theme }) => theme.common.hoverEffect}
    }
  }

  div > label > strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

interface LabelWrapperProps {
  labelIndex?: number;
}

const LabelWrapper = styled.label<LabelWrapperProps>`
  height: 2rem;

  margin-bottom: 0.625rem;

  display: flex;
  align-items: flex-end;

  > label {
    margin-right: 0.625rem;

    width: max-content;

    color: ${({ theme }) => theme.colors.grey};

    transition: all 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}

    :nth-child(${(props) => props.labelIndex + 1}) {
      color: ${({ theme }) => theme.colors.white};
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
  }
`;

interface InputProps {
  isOverlaid?: boolean;
}

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.bg1f};

  padding-left: 1.5rem;
  ${(props) =>
    props.isOverlaid ? "padding-right: 9.25rem" : "padding-right: 1.5rem"};
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

const Overlay = styled.span`
  position: fixed;

  transform: translateX(-8.25rem) translateY(1.75rem);

  text-overflow: clip;
  white-space: nowrap;

  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}
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
