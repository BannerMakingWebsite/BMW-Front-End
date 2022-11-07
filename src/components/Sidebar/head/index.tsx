import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface HeadProps {
  title: string;
}

const Head = ({ title }: HeadProps) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
    </TitleWrapper>
  );
};

export default Head;

const TitleWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};

  padding-left: ${pxToRem(25)}rem;

  width: ${pxToRem(487)}rem;
  height: ${pxToRem(88)}rem;

  display: flex;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;
