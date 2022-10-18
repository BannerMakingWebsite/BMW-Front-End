import React, { useRef, useState } from "react";
import styled from "styled-components";

function ModalContentsResetPassword() {
  const [pwLabelIndex, setPwLabelIndex] = useState<number>(0);
  const [pwValue, setPwValue] = useState<string[]>([]);
  const [pwWarning, setPwWarning] = useState<string>("");

  return (
    <>
      <Background>
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
              새 비밀번호
            </label>
            <label
              tabIndex={0}
              htmlFor="pw"
              onClick={() => setPwLabelIndex(1)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setPwLabelIndex(1);
              }}
            >
              새 비밀번호 재입력
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
          <button type="submit">재설정</button>
        </div>
      </Background>
    </>
  );
}

export default ModalContentsResetPassword;

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
