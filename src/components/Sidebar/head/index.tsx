import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface HeadProps {
  type: "title" | "input" | "inputButton";
  title?: string;
  label?: string;
}

const Head = ({ type, title, label }: HeadProps) => {
  return (
    <>
      {type === "title" && (
        <TitleWrapper>
          <h1>{title}</h1>
        </TitleWrapper>
      )}
      {type === "input" && (
        <TitleWrapper>
          <SearchText placeholder="검색" />
        </TitleWrapper>
      )}
      {type === "inputButton" && (
        <TitleWrapper type="inputButton">
          <Button>{label}</Button>
          <SearchText placeholder="검색" />
        </TitleWrapper>
      )}
    </>
  );
};

export default Head;

interface TitleWrapperProps {
  type?: "inputButton";
}

const TitleWrapper = styled.div<TitleWrapperProps>`
  background-color: ${({ theme }) => theme.colors.bg2f};

  padding-left: ${pxToRem(25)}rem;

  width: ${pxToRem(487)}rem;
  height: ${pxToRem(88)}rem;

  ${(props) => props.type === "inputButton" && `height: ${pxToRem(145)}rem;`}

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }
`;

const SearchText = styled.input`
  background-color: ${({ theme }) => theme.colors.bg4f};

  padding-left: ${pxToRem(16)}rem;
  padding-right: ${pxToRem(16)}rem;

  width: ${pxToRem(425)}rem;
  height: ${pxToRem(35)}rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.text};

  border-radius: ${pxToRem(25)}rem;
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.bg4f};

  margin-bottom: ${pxToRem(25)}rem;

  width: ${pxToRem(425)}rem;
  height: ${pxToRem(35)}rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.text};

  border-radius: ${pxToRem(25)}rem;
  border: none;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}
`;
