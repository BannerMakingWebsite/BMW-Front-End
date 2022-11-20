import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import * as C from "../../../assets/constants/cookie";
import { modalStateAtom } from "../../../atoms/modalState";
import { userStateAtom } from "../../../atoms/userState";
import Button from "../button";
import ModalInput from "../input";

function ModalContentsVerifyPassword() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const [passwordState, setPasswordState] = useState<string>("");
  const [warning, setWarning] = useState<string>("");

  const validateForm = (): boolean => {
    if (passwordState === "") {
      setWarning("값이 입력되지 않았습니다.");
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (validateForm()) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/mypage`, {
          headers: { Authorization: `${C.getCookie("accessToken")}` },
          data: {
            password: passwordState,
          },
        })
        .then(() => {
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
          alert("성공적으로 회원 탈퇴가 완료되었습니다.");
          setModalState({
            title: "",
            modalContents: null,
          });
        })
        .catch(function (error) {
          if (error.response.status === 401) {
            setWarning("비밀번호가 일치하지 않습니다.");
          } else {
            console.error(error);
            alert("알 수 없는 오류가 발생하였습니다.");
          }
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
          type="password"
          label="비밀번호"
          id="pw"
          value={passwordState}
          warning={warning}
          onChange={(value) => {
            setPasswordState(value);
          }}
        />
        <Button type="big" label="확인" />
      </Background>
    </>
  );
}

export default ModalContentsVerifyPassword;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
