import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import * as SetOption from "../../option";
import Head from "../head";

function SettingTab() {
  return (
    <TotalWrapper>
      <Head type="title" title="설정" />
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
  left: 5rem;
  z-index: 100;
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg3f};
<<<<<<< HEAD:src/components/Sidebar/Setting/index.tsx
`;

const Head = styled.div`
  width: 100%;
  height: ${pxToRem(88)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
=======
>>>>>>> 62195795973c0b8ce8c584f55da2eddd1c58d343:src/components/Sidebar/settingTab/index.tsx
`;

const ContentWrapper = styled.div`
  padding-bottom: ${pxToRem(24)}rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`;
