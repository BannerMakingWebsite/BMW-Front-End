import { useState } from "react";
import styled from "styled-components";

interface InputFieldProps {
  type:
    | "checkbox"
    | "big"
    | "number"
    | "password"
    | "double"
    | "doublePassword"
    | "doubleEmail";
  label?: string;
  id: string;
  changeEvent?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({ type, label, id, changeEvent }: InputFieldProps) => {
  const [labelIndex, setLabelIndex] = useState<number>(0);
  const [value, setValue] = useState<string[]>([]);
  const [warning, setWarning] = useState<string>("");

  return (
    <>
      {type === "checkbox" && (
        <CheckboxWrapper>
          <input id={id} type="checkbox" onChange={changeEvent} />
          <label htmlFor={id}>
            {label.indexOf("*") !== -1 &&
            (label.match(/\*/g) || []).length === 2 ? (
              <>
                {label.split("*")[0]}
                <strong>{label.split("*")[1]}</strong>
                {label.split("*")[2]}
              </>
            ) : (
              <>{label}</>
            )}
          </label>
        </CheckboxWrapper>
      )}

      {type === "number" && (
        <div>
          <LabelWrapper labelIndex={0}>
            <label htmlFor={id}>{label}</label>
          </LabelWrapper>
          <NumberInput>
            <span>px</span>
            <input
              id={id}
              type="number"
              min={0}
              max={4096}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "+" || e.key === "-" || e.key === "e")
                  e.preventDefault();
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.currentTarget.value.replace("0", "") === "")
                  e.currentTarget.value = "";

                if (e.currentTarget.value != "") {
                  if (
                    parseInt(e.currentTarget.value) <
                    parseInt(e.currentTarget.min)
                  ) {
                    e.currentTarget.value = e.currentTarget.min;
                  }
                  if (
                    parseInt(e.currentTarget.value) >
                    parseInt(e.currentTarget.max)
                  ) {
                    e.currentTarget.value = e.currentTarget.max;
                  }
                }
              }}
            />
          </NumberInput>
        </div>
      )}

      {type === "big" && (
        <div>
          <LabelWrapper labelIndex={0}>
            <label htmlFor={id}>{label}</label>
            {warning && <span>{warning}</span>}
          </LabelWrapper>
          <Input id={id} />
        </div>
      )}

      {type === "password" && (
        <div>
          <LabelWrapper labelIndex={0}>
            <label htmlFor={id}>{label}</label>
            {warning && <span>{warning}</span>}
          </LabelWrapper>
          <Input
            id={id}
            type="password"
            minLength={8}
            maxLength={24}
            placeholder="길이 8 ~ 24 글자, 알파벳과 숫자, 특수문자 조합"
          />
        </div>
      )}

      {type === "doublePassword" && (
        <div>
          <LabelWrapper labelIndex={labelIndex}>
            <label
              tabIndex={0}
              htmlFor={id}
              onClick={() => setLabelIndex(0)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setLabelIndex(0);
              }}
            >
              비밀번호
            </label>
            <label
              tabIndex={0}
              htmlFor={id}
              onClick={() => setLabelIndex(1)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setLabelIndex(1);
              }}
            >
              비밀번호 재입력
            </label>
            {warning && <span>{warning}</span>}
          </LabelWrapper>
          <Input
            key={labelIndex}
            id={id}
            type="password"
            minLength={8}
            maxLength={24}
            placeholder="길이 8 ~ 24 글자, 알파벳과 숫자, 특수문자 조합"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              {
                const temp: string[] = [...value];
                temp[labelIndex] = e.currentTarget.value;
                setValue(temp);
              }
            }}
            value={value[labelIndex]}
          />
        </div>
      )}

      {type === "doubleEmail" && (
        <div>
          <LabelWrapper labelIndex={labelIndex}>
            <label
              tabIndex={0}
              htmlFor={id}
              onClick={() => setLabelIndex(0)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setLabelIndex(0);
              }}
            >
              이메일
            </label>
            <label
              tabIndex={0}
              htmlFor={id}
              onClick={() => setLabelIndex(1)}
              onKeyDown={(e: React.KeyboardEvent<HTMLLabelElement>) => {
                if (e.key === "Enter") setLabelIndex(1);
              }}
            >
              인증 코드
            </label>
            {warning && <span>{warning}</span>}
          </LabelWrapper>
          <div>
            <Input
              key={labelIndex}
              type={labelIndex === 0 && "email"}
              id={id}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                {
                  const temp: string[] = [...value];
                  temp[labelIndex] = e.currentTarget.value;
                  setValue(temp);
                }
              }}
              value={value[labelIndex]}
              isOverlaid={labelIndex === 0 && true}
              autoComplete={"DoNotAutoComplete"}
            />
            {labelIndex === 0 && <Overlay>인증 번호 발송</Overlay>}
          </div>
        </div>
      )}
    </>
  );
};

export default InputField;

const CheckboxWrapper = styled.div`
  margin-bottom: 0.5rem;

  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  > input {
    transform: translateY(0.1rem);

    margin-right: 0.625rem;

    width: ${({ theme }) => theme.fontSizes.subTitle};
    height: ${({ theme }) => theme.fontSizes.subTitle};
  }

  > label > strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const NumberInput = styled.div`
  position: relative;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    position: relative;

    background-color: transparent;

    padding-right: 1.5rem;

    width: 12.5rem;
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: 4rem;

    border: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  span {
    position: absolute;

    width: 12.5rem;
    height: calc(100% - 0.5rem);

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    user-select: none;
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
