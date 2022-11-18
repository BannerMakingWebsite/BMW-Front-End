import axios from "axios";
import { getCookie } from "../assets/constants/cookie";

interface PatchMyPage {
  imageUrl?: string | ArrayBuffer;
  name?: string;
}

export const patchMyPage = ({ imageUrl, name }: PatchMyPage) => {
  axios
    .patch(
      `${process.env.REACT_APP_BASE_URL}/mypage`,
      {
        name: name,
        imageUrl: imageUrl,
      },
      { headers: { Authorization: `${getCookie("accessToken")}` } }
    )
    .then(() => {
      alert("성공적으로 정보 변경이 완료되었습니다.");
    })
    .catch(function (error) {
      console.error(error);
      alert("알 수 없는 오류가 발생하였습니다.");
    });
};
