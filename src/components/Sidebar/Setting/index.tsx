import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import * as SetOption from "../../option";

function SettingTab() {
  return (
    <TotalWrapper>
      <Head></Head>
      <ContentWrapper>
        <SetOption.Size name="이미지 가로 크기" onChange={() => {}} />
        <SetOption.Size name="이미지 세로 크기" onChange={() => {}} />
        <SetOption.DropDown
          wide={true}
          items={["시스템 설정"]}
          value="시스템 설정"
          name="사용자 테마"
          onChange={() => {}}
        />
        <SetOption.DropDown
          wide={true}
          items={["5분"]}
          value="5분"
          name="임시 저장 간격"
          onChange={() => {}}
        />
        <SetOption.Button name="설정 초기화" onClick={() => {}} />
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default SettingTab;

const TotalWrapper = styled.div`
  position: fixed;
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  width: 100%;
  height: ${pxToRem(88)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
`;

const ContentWrapper = styled.div`
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: ${pxToRem(24)}rem;
`;
