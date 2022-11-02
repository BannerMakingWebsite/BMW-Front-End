import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface OptionProps {
  src: string;
  name: string;
  onClick: () => void;
}
function OptionWithIcon({ src, name, onClick }: OptionProps) {
  return (
    <OptionWrapper onClick={onClick}>
      <IconImg src={src} />
      <p>{name}</p>
    </OptionWrapper>
  );
}

export default OptionWithIcon;

const OptionWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > p {
    font-weight: 400;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const IconImg = styled.img`
  margin-right: ${pxToRem(8)}rem;
  width:${pxToRem(33)}rem;
  height:${pxToRem(33)}rem;
`;
