import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import * as C from "../../../assets/constants/cookie";
import { modalStateAtom } from "../../../atoms/modalState";
import { userStateAtom } from "../../../atoms/userState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsLogin from "../login";

type PasswordStateType = {
  password: string;
  passwordConfirm: string;
};

interface ModalContentsResetPasswordProps {
  email: string;
}

function ModalContentsResetPassword({
  email,
}: ModalContentsResetPasswordProps) {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const [passwordState, setPasswordState] = useState<PasswordStateType>({
    password: "",
    passwordConfirm: "",
  });
  const [warning, setWarning] = useState<PasswordStateType>({
    password: "",
    passwordConfirm: "",
  });

  const validateForm = (): boolean => {
    let temp: PasswordStateType = Object.assign({}, warning);

    if (passwordState.password === "") {
      temp.password = "값이 입력되지 않았습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (
      !String(passwordState.password).match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/
      )
    ) {
      temp.password = "비밀번호 형식이 올바르지 않습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    if (passwordState.password !== passwordState.passwordConfirm) {
      temp.password = "비밀번호가 일치하지 않습니다.";
      setWarning(temp);
      return false;
    } else temp.password = "";

    setWarning(temp);
    return true;
  };

  const onSubmit = () => {
    if (validateForm())
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/passwordReset`, {
          email: email,
          newPassword: passwordState.password,
        })
        .then(function () {
          C.setCookie("accessToken", -1, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          C.setCookie("refreshToken", -1, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          C.setCookie("expireDate", -1, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          setUserState({
            id: 0,
            designs: [],
            goods: [],
            bookmarks: [],
            comments: [],
            posts: [],
            email: "",
            name: "",
            imageUrl: null,
            authority: "",
          });
          alert("성공적으로 비밀번호 재설정이 완료되었습니다.");
          setModalState({
            title: "로그인",
            modalContents: <ModalContentsLogin />,
          });
        })
        .catch(function (error) {
          console.error(error);
          alert("알 수 없는 오류가 발생하였습니다.");
          return;
        });
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
          type="doublePassword"
          id="pw"
          value={[passwordState.password, passwordState.passwordConfirm]}
          warning={warning.password}
          onChange={(value, labelIndex) => {
            let temp: PasswordStateType = Object.assign({}, passwordState);
            if (labelIndex === 0) temp.password = value;
            else if (labelIndex === 1) temp.passwordConfirm = value;
            setPasswordState(temp);
          }}
        />
        <Button type="big" label="재설정" />
      </Background>
    </>
  );
}

export default ModalContentsResetPassword;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
