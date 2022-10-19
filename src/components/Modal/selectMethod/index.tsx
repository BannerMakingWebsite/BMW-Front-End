import styled from "styled-components";
import { Upload, URL } from "../../../assets/images";
import Button from "../../button";

function ModalContentsSelectMethod() {
  return (
    <Background>
      <div>
        <Method>
          <div>
            <img src={URL} />
          </div>
          <div>
            <span>URL로</span>
            <span>이미지 업로드</span>
          </div>
        </Method>
        <input type="file" id="file" accept="image/*" />
        <Method htmlFor="file">
          <div>
            <img src={Upload} />
          </div>
          <div>
            <span>컴퓨터에서</span>
            <span>이미지 업로드</span>
          </div>
        </Method>
      </div>
      <Button type="big" label="취소" />
    </Background>
  );
}

export default ModalContentsSelectMethod;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  > div {
    margin-bottom: 1.5rem;

    width: calc(18.75rem * 2 + 1.5rem);

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    display: none;
  }
`;

const Method = styled.label`
  background-color: ${({ theme }) => theme.colors.bg3f};

  width: 18.75rem;
  height: 18.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  input {
    all: unset;

    position: absolute;

    display: none;

    width: 18.75rem;
    height: 18.75rem;
  }

  div {
    height: 30%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
