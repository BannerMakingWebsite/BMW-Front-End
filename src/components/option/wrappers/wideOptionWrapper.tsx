import { ReactNode } from "react";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface Props {
  name: string;
  children: ReactNode;
}

function WideOptionWrapper({ name, children }: Props) {
  return (
    <TotalWrapper>
      <NameWrapper>
        <p>{name}</p>
      </NameWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </TotalWrapper>
  );
}

export default WideOptionWrapper;

const TotalWrapper = styled.div`
  width: ${pxToRem(405)}rem;
  height: ${pxToRem(35)}rem;
  margin-top: ${pxToRem(24)}rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  width: ${pxToRem(163)}rem;
  height: ${pxToRem(35)}rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  margin-right: ${pxToRem(42)}rem;
  > p {
    font-weight: 400;
    font-size: ${pxToRem(18)}rem;
    line-height: ${pxToRem(24)}rem;
    width: ${pxToRem(141)}rem;

    color: ${({ theme }) => theme.colors.white};
  }
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
