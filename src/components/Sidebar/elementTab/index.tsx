import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { ImageIcons } from "../../assets/images";

function ElementTab() {
  const FigureText = [
    <Circle>
      <div className="figuretext">이진형 1</div>
    </Circle>,
    <Circle>
      <div className="figuretext">이진형 2</div>
    </Circle>,
    <Circle>
      <div className="figuretext">이진형 3</div>
    </Circle>,
    <Square>
      <div className="figuretext">사각형 1</div>
    </Square>,
    <>
      <Triangles src={ImageIcons.Triangle} />
      <div className="figureimg">삼각형 1</div>
    </>,
    <Circle>
      <div className="figuretext">원형 1</div>
    </Circle>,
    <>
      <Texts src={ImageIcons.Text} />
      <div className="figureimg">안녕</div>
    </>,
  ];
  return (
    <Box>
      <SearchBox>
        <SearchFigure>
          <>
            <SearchText placeholder="검색" />
          </>
        </SearchFigure>
        <FigureForm>
          {FigureText.map((F) => {
            return (
              <FigureBox>
                <FigureTexts>{F}</FigureTexts>
              </FigureBox>
            );
          })}
        </FigureForm>
      </SearchBox>
    </Box>
  );
}

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg3f};
  position: relative;
`;

const SearchBox = styled.div`
  position: fixed;
  top: ${pxToRem(64)}rem;
  left: ${pxToRem(80)}rem;
  width: ${pxToRem(487)}rem;
  height: ${pxToRem(88)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
`;
const SearchFigure = styled.div`
  width: ${pxToRem(441)}rem;
  height: ${pxToRem(35)}rem;
  border-radius: ${pxToRem(25)}rem;
  background-color: ${({ theme }) => theme.colors.bg4f};
  margin: ${pxToRem(26)}rem 0 0 ${pxToRem(23)}rem;
`;
const SearchText = styled.input`
  width: ${pxToRem(425)}rem;
  height: ${pxToRem(35)}rem;
  border-radius: ${pxToRem(25)}rem;
  border: none;
  padding-left: ${pxToRem(16)}rem;
  padding-right: ${pxToRem(24)}rem;
  background-color: ${({ theme }) => theme.colors.bg4f};
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.grey};
  outline: none;
`;

const FigureForm = styled.div`
  position: absolute;
  top: ${pxToRem(88)}rem;
  width: ${pxToRem(487)}rem;
  height: ${pxToRem(927)}rem;
  border-right: ${pxToRem(32)}rem solid ${({ theme }) => theme.colors.bg4f};
`;
const FigureBox = styled.div`
  width: ${pxToRem(405)}rem;
  height: ${pxToRem(100)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
  border-radius: ${pxToRem(25)}rem;
  position: relative;
  left: ${pxToRem(25)}rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};
  display: flex;
  align-items: center;
  margin-top: ${pxToRem(26)}rem;
`;
const FigureTexts = styled.div`
  position: relative;
  left: ${pxToRem(16)}rem;
  .figuretext {
    position: relative;
    left: ${pxToRem(95)}rem;
    top: ${pxToRem(13)}rem;
    width: ${pxToRem(130)}rem;
  }
  .figureimg {
    position: relative;
    left: ${pxToRem(95)}rem;
  }
`;
const Square = styled.div`
  width: ${pxToRem(75)}rem;
  height: ${pxToRem(75)}rem;
  background-color: ${({ theme }) => theme.colors.grey};
`;
const Circle = styled.div`
  width: ${pxToRem(75)}rem;
  height: ${pxToRem(75)}rem;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
`;
const Triangles = styled.img`
  position: absolute;
  right: ${pxToRem(50)}rem;
  top: ${pxToRem(-13)}rem;
`;
const Texts = styled.img`
  position: absolute;
  right: ${pxToRem(8)}rem;
`;

export default ElementTab;
