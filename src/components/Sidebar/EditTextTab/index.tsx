import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import * as SetOption from "../../option";

function EditTextTab() {
  return (
    <TotalWrapper>
      <Head></Head>
      <ContentWrapper>
        <SetOption.Sort onClickFront={() => {}} onClickBack={() => {}} />
        <SetOption.Flip onClickFront={() => {}} onClickBack={() => {}} />
        <SetOption.Range name="불투명도" onChange={(e) => {}} />
        <SetOption.DropDown
          items={["default"]}
          value="default"
          name="폰트"
          onChange={() => {}}
        />
        <SetOption.DropDown
          items={["20"]}
          value="20"
          name="크기"
          onChange={() => {}}
        />
        <SetOption.TextAlign onChange={() => {}} />
        <SetOption.TextStyle />
        <SetOption.Color name="글자색" onChange={() => {}} />
        <SetOption.Color name="배경색" onChange={() => {}} />
        <SetOption.Color name="외곽선" onChange={() => {}} />
        <SetOption.Range name="두께" onChange={() => {}} />
        <SetOption.Color name="그림자" onChange={() => {}} />
        <SetOption.Range name="방향" onChange={() => {}} />
        <SetOption.Range name="거리" onChange={() => {}} />
        <SetOption.Range name="불투명도" onChange={() => {}} />
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default EditTextTab;

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
