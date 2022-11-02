import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { OptionIcons } from "../../assets/images";
import CommonOptionWrapper from "./wrappers/commonOptionWrapper";
import EachPositionOption from "./eachOption/optionWithIcon";

interface Props {
  onClickFront: () => void;
  onClickBack: () => void;
}

function SortOption({ onClickFront, onClickBack }: Props) {
  return (
    <CommonOptionWrapper name="순서">
      <EachPositionOption
        name="앞으로 이동"
        src={OptionIcons.MoveFront}
        onClick={onClickFront}
      />
      <EachPositionOption
        name="뒤로 이동"
        src={OptionIcons.MoveBack}
        onClick={onClickBack}
      />
    </CommonOptionWrapper>
  );
}

export default SortOption;
