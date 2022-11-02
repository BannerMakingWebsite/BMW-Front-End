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
        <Img src={LeftAlign} onClick={() => onChange("flex-start")} />
        <Img src={CenterAlign} onClick={() => onChange("center")} />
        <Img src={RightAlign} onClick={() => onChange("flex-end")} />
      </div>
    </CommonOptionWrapper>
  );
}

export default TextAlign;

const Img = styled.img`
  margin-right: ${pxToRem(25)}rem;
`;