import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { FigureIcons } from "../../../assets/images";
import Head from "../head";

function FigureTab() {
  const FigureText = ["사각형", "원형", "삼각형", "텍스트"];

  return (
    <Background>
      <Head type="input" />
      <ContentWrapper>
        {FigureText.map((figure) => {
          return (
            <FigureWrapper>
              {figure === "사각형" && (
                <img src={FigureIcons.Square} alt="square" />
              )}
              {figure === "원형" && (
                <img src={FigureIcons.Circle} alt="circle" />
              )}
              {figure === "삼각형" && (
                <img src={FigureIcons.Triangle} alt="triangle" />
              )}
              {figure === "텍스트" && <img src={FigureIcons.Text} alt="text" />}
              <h1>{figure}</h1>
            </FigureWrapper>
          );
        })}
      </ContentWrapper>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
`;

const ContentWrapper = styled.div`
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`;

const FigureWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};

  margin-top: ${pxToRem(25)}rem;

  width: calc(100% - ${pxToRem(50)}rem);
  height: ${pxToRem(100)}rem;

  display: flex;
  align-items: center;

  border-radius: 1.5rem;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  > h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: normal;
  }

  > img {
    margin-left: ${pxToRem(16)}rem;
    margin-right: ${pxToRem(16)}rem;

    width: ${pxToRem(75)}rem;
    height: ${pxToRem(75)}rem;

    object-fit: contain;
  }
`;

export default FigureTab;
