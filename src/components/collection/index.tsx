import { useRef } from "react";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { scrollNext, scrollPrev } from "../../assets/constants/scroll";

interface CollectionProps {
  title: string;
}

const Collection = ({ title }: CollectionProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <Background>
      <TitleWrapper>
        <h1>{title}</h1>
        <span>더 보기 →</span>
      </TitleWrapper>
      <Wrapper ref={wrapperRef}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Wrapper>
      <ScrollWrapper>
        <div onClick={() => scrollPrev(wrapperRef)}>◀</div>
        <div onClick={() => scrollNext(wrapperRef)}>▶</div>
      </ScrollWrapper>
    </Background>
  );
};

export default Collection;

const Background = styled.div`
  width: calc(100% - ${pxToRem(50)}rem);
  height: 14rem;
`;

const TitleWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.text};
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.description};

    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const Wrapper = styled.div`
  padding-left: ${pxToRem(30)}rem;
  padding-right: ${pxToRem(20)}rem;
  margin-top: ${pxToRem(10)}rem;

  display: flex;

  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1.5rem;
    box-shadow: inset 0 0 6rem ${({ theme }) => theme.colors.bg5f};
  }

  > div {
    background-color: ${({ theme }) => theme.colors.bg2f};

    margin-right: ${pxToRem(10)}rem;

    min-width: ${pxToRem(210)}rem;
    height: ${pxToRem(175)}rem;

    border-radius: 1.5rem;
  }
`;

const ScrollWrapper = styled.div`
  @media screen and (max-width: 400px) {
    display: none !important;
  }

  transform: translateY(${pxToRem(190.5) * -1}rem);

  margin-top: 0.5rem;

  width: 100%;

  display: flex;
  justify-content: space-between;

  z-index: 0;

  > div {
    background-color: ${({ theme }) => theme.colors.bg5f};

    width: ${pxToRem(20)}rem;
    height: ${pxToRem(175)}rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.colors.subText};

    user-select: none;
    border-radius: 1.5rem;
    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;
