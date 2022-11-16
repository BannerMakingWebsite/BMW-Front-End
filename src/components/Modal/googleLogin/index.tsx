import { gapi } from "gapi-script";
import { useEffect } from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import * as C from "../../../assets/constants/cookie";
import { pxToRem } from "../../../assets/constants/pxToRem";

const GoogleLoginButton = () => {
  useEffect(() => {
    function init() {
      gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", init);
  }, []);

  const onSuccess = async (response: any) => {
    const jwtToken = response.accessToken;

    if (jwtToken) {
      console.log(response.accessToken);
      C.setCookie("accToken", response.accessToken, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
      C.setCookie("expireDate", Date.now() + 3600, {
        path: "/",
        secure: true,
        sameSite: "none",
      });
    }
  };

  const onFailure = (response: any) => {
    console.error(response);
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
