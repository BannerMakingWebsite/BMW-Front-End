import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { FigureIcons } from "../../../assets/images";
import Head from "../head";
import {
  FigureDataType,
  TextDataType,
} from "../../../assets/types/elementTypes";
import { useRecoilState } from "recoil";
import { ElementListState } from "../../../atoms/elementState";
function FigureTab() {
  const [elementList, setElementList] = useRecoilState(ElementListState);

  const getNewFigure = (type: string): TextDataType | FigureDataType => {
    if (type != "text")
      return {
        id: self.crypto.randomUUID(),
        type: type,
        height: 100,
        width: 100,
        posX: 0,
        posY: 0,
        flipX: false,
        flipY: false,
        color: "green",
        borderColor: "black",
        opacity: 100,
        shadowColor: "",
      };
    return {
      id: self.crypto.randomUUID(),
      type: "text",
      width: 100,
      height: 100,
      posX: 0,
      posY: 0,
      flipX: false,
      flipY: false,
      color: "black",
      backgroundColor: "",
      borderColor: "black",
      borderWidth: 1,
      fontAlign: "start",
      fontFamily: "unset",
      fontSize: 13,
      fontStyle: [],
      opacity: 100,
      shadowColor: "",
      shadowDirection: 0,
      shadowDistance: 0,
      shadowOpacity: 0,
      value: "텍스트를 입력하세요.",
    };
  };

  const FigureText = [
    {
      text: "사각형",
      img: FigureIcons.Square,
      onClick: () => {
        setElementList([...elementList, getNewFigure("square")]);
      },
    },
    {
      text: "원형",
      img: FigureIcons.Circle,
      onClick: () => {
        setElementList([...elementList, getNewFigure("circle")]);
      },
    },
    {
      text: "삼각형",
      img: FigureIcons.Triangle,
      onClick: () => {
        setElementList([...elementList, getNewFigure("triangle")]);
      },
    },
    {
      text: "텍스트",
      img: FigureIcons.Text,
      onClick: () => {
        setElementList([...elementList, getNewFigure("text")]);
      },
    },
  ];

  return (
    <Background>
      <Head type="input" />
      <ContentWrapper>
        {FigureText.map((figure) => {
          return (
            <FigureWrapper onClick={figure.onClick}>
              <img src={figure.img} alt="square" />
              <h1>{figure.text}</h1>
            </FigureWrapper>
          );
        })}
      </ContentWrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg3f};

  position: fixed;
  left: 5rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 100;
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
