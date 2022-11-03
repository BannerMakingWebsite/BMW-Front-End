import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { CenterAlign, LeftAlign, RightAlign } from "../../assets/images/option";
import CommonOptionWrapper from "./wrappers/commonOptionWrapper";

interface Props {}

function TextStyle({}: Props) {
  return (
    <CommonOptionWrapper name="스타일">
      <BlockWrapper>
        <Block>
          <p id="bold">B</p>
        </Block>
        <Block>
          <p id="italic">I</p>
        </Block>
        <Block>
          <p id="underline">U</p>
        </Block>
        <Block>
          <p id="line-through">T</p>
        </Block>
      </BlockWrapper>
    </CommonOptionWrapper>
  );
}

export default TextStyle;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Block = styled.div`
  width: ${pxToRem(33)}rem;
  margin-right: ${pxToRem(25)}rem;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > #bold {
    font-weight: bold;
  }
  > #italic {
    font-style: italic;
  }
  > #underline {
    text-decoration-line: underline;
  }
  > #line-through {
    text-decoration-line: line-through;
  }
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
