import styled from "styled-components";
import Button from "../../button";
import InputField from "../../input";

function ModalContentsLogin() {
  return (
    <>
      <Background>
        <InputField type="big" label="이메일" id="email" />
        <InputField type="password" label="비밀번호" id="pw" />
        <InputField type="checkbox" label="아이디 기억" id="remember" />
        <Button type="big" label="로그인" />
        <Button type="googleLogin" />
        <ExternalWrapper>
          <span>계정이 없으시다면?</span>
          <strong>회원가입</strong>
        </ExternalWrapper>
        <ExternalWrapper>
          <strong>비밀번호를 잊으셨나요?</strong>
        </ExternalWrapper>
      </Background>
    </>
  );
}

export default ModalContentsLogin;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;

const ExternalWrapper = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.subTitle};

  span {
    margin-right: 0.625rem;
  }

  strong {
    text-decoration: underline;

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;
