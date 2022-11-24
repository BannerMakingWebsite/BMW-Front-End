import axios from "axios";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loadUser } from "../../../apis/loadUser";
import * as C from "../../../assets/constants/cookie";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { GoogleLoginRequestType } from "../../../assets/types/googleLogin/request";
import { LoginResponseType } from "../../../assets/types/login/response";
import { modalStateAtom } from "../../../atoms/modalState";
import { userStateAtom } from "../../../atoms/userState";

const GoogleLoginButton = () => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  useEffect(() => {
    function init() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "profile",
      });
    }

    gapi.load("client:auth2", init);
  }, []);

  const onSuccess = async (response: any) => {
    const data: GoogleLoginRequestType = {
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
    };

    if (data) {
      axios
        .post<LoginResponseType>(
          `${process.env.REACT_APP_BASE_URL}/google`,
          data
        )
        .then((response) => {
          C.setCookie("accessToken", response.data.accessToken, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          C.setCookie("refreshToken", response.data.refreshToken, {
            path: "/",
            secure: true,
            sameSite: "none",
          });
          loadUser(setUserState, "google");
          localStorage.setItem("BMW-last-login-type", "google");
          alert("성공적으로 로그인이 완료되었습니다.");
          setModalState({
            title: "",
            modalContents: null,
          });
        })
        .catch(function (error: any) {
          console.error(error);
          alert("알 수 없는 오류가 발생하였습니다.");
          return;
        });
    }
  };

  const onFailure = (error: any) => {
    console.error(error);
    alert("알 수 없는 오류가 발생하였습니다.");
  };

  return (
    <GoogleWrapper
      clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      buttonText="구글 계정으로 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      scope="profile"
    />
  );
};

export default GoogleLoginButton;

const GoogleWrapper = styled(GoogleLogin)`
  position: fixed;

  transform: translateY(${pxToRem(336)}rem);

  background-color: ${({ theme }) => theme.colors.bg1f} !important;

  margin-top: ${pxToRem(24)}rem;

  width: ${pxToRem(624)}rem;
  height: ${pxToRem(80)}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white} !important;
  font-size: ${({ theme }) => theme.fontSizes.title} !important;

  border: 0.1px solid ${({ theme }) => theme.colors.grey} !important;
  border-radius: 1.5rem !important;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  > div {
    background: none !important;
  }
`;
