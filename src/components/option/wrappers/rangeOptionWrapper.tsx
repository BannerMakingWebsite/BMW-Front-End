import { ReactNode } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface Props {
  name: string;
  children: ReactNode;
}

function RangeOptionWrapper({ name, children }: Props) {
  return (
    <TotalWrapper>
      <NameWrapper>
        <p>{name}</p>
      </NameWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </TotalWrapper>
  );
}

export default RangeOptionWrapper;

const TotalWrapper = styled.div`
  width: ${pxToRem(410)}rem;
  margin-top: ${pxToRem(27)}rem;
  margin-bottom: ${pxToRem(3)}rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${pxToRem(20)}rem;
  > p {
    font-weight: 400;
    font-size: ${pxToRem(20)}rem;
    line-height: ${pxToRem(24)}rem;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
