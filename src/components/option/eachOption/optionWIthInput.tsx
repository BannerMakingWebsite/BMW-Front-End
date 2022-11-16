import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { DropArrow } from "../../../assets/images/option";

interface Props {
  onChange: (value: string) => void;
  width: number;
  value?: string;
}

function OptionWithInput({ onChange, width, value }: Props) {
  return (
    <TotalWrapper width={width}>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.currentTarget.value.replace(/[^0-9]/g, ""));
          console.log(e.currentTarget.value.replace(/[^0-9]/g, ""));
        }}
      />
      <p>px</p>
    </TotalWrapper>
  );
}

export default OptionWithInput;

const TotalWrapper = styled.div<{ width: number }>`
  height: ${pxToRem(35)}rem;
  width: ${(props) => pxToRem(props.width)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(8)}rem;
  padding-right: ${pxToRem(24)}rem;
  font-weight: 300;
  font-size: ${pxToRem(16)}rem;
  line-height: ${pxToRem(19)}rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  > input {
    width: 100%;
    outline: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.white};
  }
  > p {
    position: absolute;
    bottom: ${pxToRem(5)}rem;
    right: ${pxToRem(5)}rem;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #cccccc;
  }
`;
