import styled from "styled-components";
import { pxToRem } from "./../../assets/constants/pxToRem";
import { OptionIcons } from "./../../assets/images";
import CommonOptionWrapper from "./wrappers/commonOptionWrapper";
import EachPositionOption from "./eachOption/optionWithIcon";

interface Props {
  onClickFront: () => void;
  onClickBack: () => void;
}

function ReverseOption({ onClickFront, onClickBack }: Props) {
  return (
    <CommonOptionWrapper name="반전">
      <EachPositionOption
        name="좌우 반전"
        src={OptionIcons.Horizontal}
        onClick={onClickFront}
      />
      <EachPositionOption
        name="상하 반전"
        src={OptionIcons.Vertical}
        onClick={onClickBack}
      />
    </CommonOptionWrapper>
  );
}

export default ReverseOption;
