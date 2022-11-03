import { useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function OptionWithColor({ onChange }: Props) {
  return (
    <ColorBox>
      <ColorView>
        <XLine />
      </ColorView>
    </ColorBox>
  );
}

export default OptionWithColor;

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(30)}rem;
  height: ${pxToRem(30)}rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;

const ColorView = styled.div<{ color?: string }>`
  width: ${pxToRem(24)}rem;
  height: ${pxToRem(24)}rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${(props) => (props.color ? props.color : "white")};
  position: relative;
`;

const XLine = styled.div`
  border-bottom: 1px solid #000000;
  width: ${pxToRem(32)}rem;
  transform: rotate(135deg);
  bottom: calc(50% - ${pxToRem(1)}rem);
  left: calc(50% - ${pxToRem(16)}rem);
  position: absolute;
`;
