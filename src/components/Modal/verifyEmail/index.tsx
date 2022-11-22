import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsResetPassword from "../resetPassword";

type EmailStateType = {
  email: string;
  authKey: string;
};

function ModalContentsVerifyEmail() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const [emailState, setEmailState] = useState<EmailStateType>({
    email: "",
    authKey: "",
  });
  const [warning, setWarning] = useState<EmailStateType>({
    email: "",
    authKey: "",
  });

  const validateForm = (): boolean => {
    let temp: EmailStateType = Object.assign({}, warning);

    if (emailState.email === "") {
      temp.email = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else {
      temp.email = "";
    }

    if (
      !String(emailState.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      temp.email = "이메일의 형식이 올바르지 않습니다.";
      setWarning(temp);
      return false;
    } else {
      temp.email = "";
      setWarning(temp);
    }

    return true;
  };

  const onSubmit = () => {
    if (validateForm()) {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/passwordConfirm`, {
          params: { email: emailState.email, authKey: emailState.authKey },
        })
        .then(function () {
          setModalState({
            title: "비밀번호 재설정",
            modalContents: (
              <ModalContentsResetPassword email={emailState.email} />
            ),
          });
        })
        .catch(function (error) {
          let temp: EmailStateType = Object.assign({}, warning);
          if (error.response.status === 404) {
            temp.email = "해당 이메일로 가입된 계정이 존재하지 않습니다.";
            setWarning(temp);
          } else if (error.response.status === 401) {
            temp.email = "인증 코드가 일치하지 않습니다.";
            setWarning(temp);
          } else {
            console.error(error);
            alert("알 수 없는 오류가 발생하였습니다.");
          }

          return;
        });
    }
  };

  return (
    <>
      <Background
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <ModalInput
          type="doubleEmail"
          id="email"
          value={[emailState.email, emailState.authKey]}
          warning={warning.email}
          onChange={(value, labelIndex) => {
            let temp: EmailStateType = Object.assign({}, emailState);
            if (labelIndex === 0) temp.email = value;
            else if (labelIndex === 1) temp.authKey = value;
            setEmailState(temp);
          }}
        />
        <Button type="big" label="확인" />
      </Background>
    </>
  );
}

export default ModalContentsVerifyEmail;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
