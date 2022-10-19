import styled from "styled-components";
import Button from "../../button";
import InputField from "../../input";

function ModalContentsResetPassword() {
  return (
    <>
      <Background>
        <InputField type="doublePassword" id="pw" />
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
