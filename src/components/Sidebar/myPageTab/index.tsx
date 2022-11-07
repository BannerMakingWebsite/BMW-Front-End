import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Collection from "../../collection";
import MyInfo from "../../myInfo";
import Head from "../head";

function MyPageTab() {
  return (
    <TotalWrapper>
      <Head title="계정" />
      <ContentWrapper>
        <MyInfo />
        <Collection title="내가 공유한 템플릿" />
        <Collection title="최근에 다운로드한 템플릿" />
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default MyPageTab;

const TotalWrapper = styled.div`
  position: fixed;
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: ${pxToRem(24)}rem;

  > div {
    margin-top: ${pxToRem(25)}rem;
  }
`;
