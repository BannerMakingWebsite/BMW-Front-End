import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";

interface Props {
  name: string;
  onClick: () => void;
}

function Button({ name, onClick }: Props) {
  return (
    <TotalWrapper onClick={onClick}>
      <p>{name}</p>
    </TotalWrapper>
  );
}

export default Button;

const TotalWrapper = styled.div`
  width: ${pxToRem(405)}rem;
  height: ${pxToRem(35)}rem;
  margin-top: ${pxToRem(25)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    font-weight: 400;
    font-size: ${pxToRem(16)}rem;
    line-height: ${pxToRem(19)}rem;
    color: ${({ theme }) => theme.colors.white};
  }
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
