import axios from "axios";

export const sendEmail = (email: string) => {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/send`, {
        email: email,
      })
      .then(function () {
        alert("성공적으로 인증 코드를 발송하였습니다.");
      })
      .catch(function (error) {
        console.error(error);
        alert("알 수 없는 오류가 발생하였습니다.");
      });
  else alert("이메일 형식이 올바르지 않습니다.");
};
