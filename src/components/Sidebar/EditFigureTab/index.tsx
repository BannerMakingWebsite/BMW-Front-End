import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import * as SetOption from "../../option";

function EditFigureTab() {
  return (
    <TotalWrapper>
      <Head></Head>
      <SetOption.Sort onClickFront={() => {}} onClickBack={() => {}} />
      <SetOption.Flip onClickFront={() => {}} onClickBack={() => {}} />
      <SetOption.Range name="불투명도" onChange={(e) => {}} />
      <SetOption.Color name="색상" onChange={(e) => {}} />
      <SetOption.Color name="외곽선" onChange={(e) => {}} />
      <SetOption.Color name="그림자" onChange={(e) => {}} />
    </TotalWrapper>
  );
}

export default EditFigureTab;

const TotalWrapper = styled.div`
  position: fixed;
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${pxToRem(24)}rem;
`;

const Head = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};
  width: 100%;
  height: ${pxToRem(88)}rem;
`;
