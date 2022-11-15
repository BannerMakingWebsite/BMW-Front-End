import { useEffect, useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
}

function OptionWithRange({ onChange, value }: Props) {
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <>
      <RangeBar
        type="range"
        min={0}
        max={100}
        step={0}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </>
  );
}

export default OptionWithRange;

const RangeBar = styled.input`
  width: 100%;
  height: ${pxToRem(10)}rem;
  -webkit-appearance: none;
  background: transparent;
  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    border-top: 1px solid ${({ theme }) => theme.colors.white};
    position: relative;
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: fit-content;
    height: fit-content;
    padding: ${pxToRem(5)}rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    position: relative;
    top: -${pxToRem(5)}rem;
  }
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
