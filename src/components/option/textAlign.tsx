import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { CenterAlign, LeftAlign, RightAlign } from "../../assets/images/option";
import CommonOptionWrapper from "./wrappers/commonOptionWrapper";

interface Props {
  onChange: (value: string) => void;
}

function TextAlign({ onChange }: Props) {
  return (
    <CommonOptionWrapper name="정렬">
      <div>
        <Img src={LeftAlign} onClick={() => onChange("start")} />
        <Img src={CenterAlign} onClick={() => onChange("center")} />
        <Img src={RightAlign} onClick={() => onChange("end")} />
      </div>
    </CommonOptionWrapper>
  );
}

export default TextAlign;

const Img = styled.img`
  margin-right: ${pxToRem(25)}rem;
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
