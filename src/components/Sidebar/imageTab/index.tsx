import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Collection from "../../collection";
import Head from "../head";

function ImageTab() {
  return (
    <Background>
      <Head type="inputButton" label="이미지 업로드" />
      <ContentWrapper>
        <Collection title="업로드 한 이미지" />
      </ContentWrapper>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
`;

const ContentWrapper = styled.div`
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  > div {
    margin-top: ${pxToRem(25)}rem;
  }
`;

export default ImageTab;
