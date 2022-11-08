import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Collection from "../../collection";
import Head from "../head";

function TemplateTab() {
  return (
    <Background>
      <Head type="input" />
      <ContentWrapper>
        <Collection title="내 즐겨찾기" />
        <Collection title="인기 템플릿" />
        <Collection title="최근에 업로드된 템플릿" />
      </ContentWrapper>
    </Background>
  );
}

export default TemplateTab;

const Background = styled.div`
  position: fixed;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
`;

const ContentWrapper = styled.div`
  padding-bottom: ${pxToRem(24)}rem;

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
