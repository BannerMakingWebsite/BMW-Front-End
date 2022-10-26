import styled from "styled-components";
import Button from "../../button";
import InputField from "../../input";

function ModalContentsVerifyEmail() {
  return (
    <>
      <Background>
        <InputField type="doubleEmail" id="email" />
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