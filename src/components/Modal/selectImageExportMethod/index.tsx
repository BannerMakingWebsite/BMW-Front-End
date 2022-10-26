import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { ModalIcons } from "../../../assets/images";
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
            <img alt="JPG-method" src={ModalIcons.JPG} />
            <h1>.jpg 형식</h1>
          </Card>
          <Card>
            <img alt="PNG-method" src={ModalIcons.PNG} />
            <h1>.png 형식</h1>
          </Card>
          <Card>
            <img alt="PDF-method" src={ModalIcons.PDF} />
            <h1>.pdf 형식</h1>
          </Card>
          <Card>
            <img alt="Clipboard-method" src={ModalIcons.Clipboard} />
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
    margin-left: ${pxToRem(25)}rem;

    width: ${pxToRem(424)}rem;

    > div:last-of-type {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BannerImage = styled.img`
  width: ${pxToRem(640)}rem;
  height: ${pxToRem(640)}rem;

  border-radius: 1.5rem;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: ${pxToRem(560)}rem;

  display: inline-flex;
  flex-flow: column wrap;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  :nth-of-type(2n - 1) {
    margin-right: ${pxToRem(25)}rem;
  }
  margin-bottom: ${pxToRem(25)}rem;

  width: ${pxToRem(200)}rem;
  height: ${pxToRem(200)}rem;

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
