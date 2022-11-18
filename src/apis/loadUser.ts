import axios from "axios";
import { SetterOrUpdater } from "recoil";
import * as C from "../assets/constants/cookie";
import { UserType } from "../assets/types/userType";

export const loadUser = (setState: SetterOrUpdater<UserType>) => {
  const accessToken = C.getCookie("accessToken");
  const refreshToken = C.getCookie("refreshToken");
  if (accessToken) {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/mypage`, {
        headers: { Authorization: `${accessToken}` },
      })
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401) {
          axios
            .put(
              `${process.env.REACT_APP_BASE_URL}/newAccess`,
              { accessToken: accessToken, refreshToken: refreshToken },
              { headers: { Authorization: "" } }
            )
            .then((response) => {
              console.log(response);
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
            });
        }
      });
  }
};
