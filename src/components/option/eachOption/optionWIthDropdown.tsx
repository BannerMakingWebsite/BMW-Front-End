import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { DropArrow } from "../../../assets/images/option";

interface Props<T> {
  items: ReadonlyArray<T> | undefined;
  value?: T;
  onChange: (value: T) => void;
  width: number;
}

function OptionWithDropdown<T extends string>({
  items,
  onChange,
  width,
  value,
}: Props<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <TotalWrapper
        width={width}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>{value}</p>
        <DropDownArrow isOpen={isOpen} src={DropArrow} alt="" />
        {isOpen && (
          <DropList>
            {items.map(
              (val) =>
                val != value && (
                  <div onClick={() => onChange(val)}>
                    <p>{val}</p>
                  </div>
                )
            )}
          </DropList>
        )}
      </TotalWrapper>
    </OutsideClickHandler>
  );
}

export default OptionWithDropdown;

const TotalWrapper = styled.div<{ width: number }>`
  height: ${pxToRem(35)}rem;
  width: ${(props) => pxToRem(props.width)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${pxToRem(8)}rem;
  font-weight: 300;
  font-size: ${pxToRem(16)}rem;
  line-height: ${pxToRem(19)}rem;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

const DropList = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  top: ${pxToRem(35)}rem;
  left: 0%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg2f};
  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: ${pxToRem(35)}rem;
    padding: 0 ${pxToRem(8)}rem;
  }
`;

const DropDownArrow = styled.img<{ isOpen: boolean }>`
  transform: ${(props) => props.isOpen && "rotate(180deg)"};
  transition: 0.1s;
`;
