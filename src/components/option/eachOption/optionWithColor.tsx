import { useEffect, useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { BlockPicker, ChromePicker } from "react-color";
import OutsideClickHandler from "react-outside-click-handler";

interface Props {
  onChange: (value: string) => void;
  value?: string;
}

function OptionWithColor({ onChange, value = "" }: Props) {
  const [toggle, setToggle] = useState<boolean>(false);
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setToggle(false);
      }}
    >
      <TotalWrapper>
        {toggle && (
          <PickerWrapper>
            <button onClick={() => onChange("")}>Set To None</button>
            <ChromePicker color={value} onChange={(e) => onChange(e.hex)} />
          </PickerWrapper>
        )}
        <ColorBox
          onClick={(e) => {
            e.preventDefault();
            setToggle(true);
          }}
        >
          <ColorView style={{ backgroundColor: value }}>
            {!value || value == "none" ? <XLine /> : ""}
          </ColorView>
        </ColorBox>
      </TotalWrapper>
    </OutsideClickHandler>
  );
}

export default OptionWithColor;

const TotalWrapper = styled.div`
  position: relative;
  z-index: 50;
`;

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(30)}rem;
  height: ${pxToRem(30)}rem;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.common.hoverEffect};
  transition: filter 0.25s ease;
  position: relative;
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

const PickerWrapper = styled.div`
  border: 1px solid black;
  position: absolute;
  left: ${pxToRem(60)}rem;
  top: ${pxToRem(0)}rem;
  > button {
    position: absolute;
    z-index: 999;
    bottom: 0;
    left: 0;
  }
`;
