import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { AutoSaveState, BoardSizeState } from "../../../atoms/elementState";
import * as SetOption from "../../option";
import Head from "../head";

function SettingTab() {
  const [size, setSize] = useRecoilState(BoardSizeState);
  const [savetime, setTime] = useRecoilState(AutoSaveState);

  return (
    <TotalWrapper>
      <Head type="title" title="설정" />
      <ContentWrapper>
        <SetOption.Size
          name="이미지 가로 크기"
          value={size.width + ""}
          onChange={(value) => {
            setSize({
              width: Number(value) > 1920 ? 1920 : Number(value),
              height: size.height,
            });
          }}
        />
        <SetOption.Size
          name="이미지 세로 크기"
          value={size.height + ""}
          onChange={(value) => {
            console.log(value);
            setSize({
              height: Number(value) > 1080 ? 1080 : Number(value),
              width: size.width,
            });
          }}
        />
        <SetOption.DropDown
          wide={true}
          items={["시스템 설정"]}
          value="시스템 설정"
          name="사용자 테마"
          onChange={() => {}}
        />
        <SetOption.DropDown
          wide={true}
          items={["1분", "2분", "3분", "4분", "5분"]}
          value={savetime + "분"}
          name="임시 저장 간격"
          onChange={(value) => {
            setTime(Number(value.replace("분", "")));
          }}
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
