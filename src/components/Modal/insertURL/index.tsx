import styled from "styled-components";
import Button from "../../button";
import InputField from "../../input";

function ModalContentsInsertURL() {
  return (
    <>
      <Background>
        <InputField type="big" label="이미지 URL" id="URL" />
        <Button type="big" label="확인" />
      </Background>
    </>
  );
}

export default ModalContentsInsertURL;

const Background = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
`;
