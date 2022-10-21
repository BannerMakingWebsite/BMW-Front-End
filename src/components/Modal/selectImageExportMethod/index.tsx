import styled from "styled-components";
import { Clipboard, JPG, PDF, PNG } from "../../../assets/images";
import Button from "../../button";

function ModalContentsSelectImageExportMethod() {
  return (
    <Background>
      <BannerImage
        alt="banner-image"
        src="https://cdn.dribbble.com/users/1625099/screenshots/14580528/media/d4535805429570af166acbd939358209.png?compress=1&resize=400x300"
      />
      <div>
        <Wrapper>
          <Card>
            <img alt="JPG-method" src={JPG} />
            <h1>.jpg 형식</h1>
          </Card>
          <Card>
            <img alt="PNG-method" src={PNG} />
            <h1>.png 형식</h1>
          </Card>
          <Card>
            <img alt="PDF-method" src={PDF} />
            <h1>.pdf 형식</h1>
          </Card>
          <Card>
            <img alt="Clipboard-method" src={Clipboard} />
            <h1>클립보드 복사</h1>
          </Card>
        </Wrapper>
        <div>
          <Button type="small" label="취소" />
          <Button type="small" label="저장" buttonColor="white" />
        </div>
      </div>
    </Background>
  );
}

export default ModalContentsSelectImageExportMethod;

const Background = styled.div`
  display: flex;

  > div {
    margin-left: 1.5rem;

    width: 26.5rem;

    > div:last-of-type {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BannerImage = styled.img`
  width: 40rem;
  height: 40rem;

  border-radius: 1.5rem;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: 35rem;

  display: inline-flex;
  flex-flow: column wrap;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  :nth-of-type(2n - 1) {
    margin-right: 1.5rem;
  }
  margin-bottom: 1.5rem;

  width: 12.5rem;
  height: 12.5rem;

  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 1.5rem;

  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;
