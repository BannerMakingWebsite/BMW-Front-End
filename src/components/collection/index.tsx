import { useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { scrollNext, scrollPrev } from "../../assets/constants/scroll";
import { modalStateAtom } from "../../atoms/modalState";
import ModalContentsViewTemplate from "../Modal/viewTemplate";

interface CollectionProps {
  title: string;
}

const Collection = ({ title }: CollectionProps) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <Background>
      <Title>
        <h1>{title}</h1>
        <span>더 보기 →</span>
      </Title>
      <Wrapper>
        <ScrollWrapper>
          <div onClick={() => scrollPrev(wrapperRef)}>◀</div>
          <div onClick={() => scrollNext(wrapperRef)}>▶</div>
        </ScrollWrapper>
        <CollectionWrapper ref={wrapperRef}>
          <div
            onClick={() =>
              setModalState({
                title: "템플릿 정보",
                modalContents: (
                  <ModalContentsViewTemplate
                    id={0}
                    title={""}
                    tags={[]}
                    author={""}
                    date={""}
                    like={0}
                    favorite={0}
                    comments={[]}
                  />
                ),
              })
            }
          ></div>
          <div />
          <div />
          <div />
          <div />
        </CollectionWrapper>
      </Wrapper>
    </Background>
  );
};

export default Collection;

const Background = styled.div`
  width: calc(100% - ${pxToRem(50)}rem);
  height: 14rem;
`;

const Title = styled.div`
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CollectionWrapper = styled.div`
  position: absolute;

  margin-top: ${pxToRem(10)}rem;

  width: calc(100% - ${pxToRem(60)}rem);
  height: ${pxToRem(175)}rem;

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

    border-radius: 1.5rem;
    transition: filter 0.25s ease;
    cursor: pointer;

    :hover {
      filter: brightness(85%);
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;

const ScrollWrapper = styled.div`
  margin-top: 0.5rem;

  width: 100%;
  height: ${pxToRem(175)}rem;

  display: flex;
  justify-content: space-between;

  > div {
    background-color: ${({ theme }) => theme.colors.bg5f};

    width: ${pxToRem(20)}rem;

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
