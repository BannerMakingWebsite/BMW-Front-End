import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { ImageIcons } from "../../assets/images";

function FigureTab() {
  const FigureText = ["사각형", "원형", "삼각형", "텍스트"];
  return (
    <Box>
      <SearchBox>
        <SearchFigure>
          <>
            <SearchText placeholder="검색" />
          </>
        </SearchFigure>
        <FigureScroll />
        {FigureText.map((F) => {
          return (
            <FigureBox>
              <FigureTexts>{F}</FigureTexts>
            </FigureBox>
          );
        })}
        <Square />
        <Circle />
        <Triangles src={ImageIcons.Triangle} />
        <Texts src={ImageIcons.Text} />
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

const FigureBox = styled.div`
  width: ${pxToRem(405)}rem;
  height: ${pxToRem(100)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
  border-radius: ${pxToRem(25)}rem;
  position: relative;
  top: ${pxToRem(25)}rem;
  left: ${pxToRem(25)}rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};
  display: flex;
  align-items: center;
  margin-top: ${pxToRem(26)}rem;
`;
const FigureTexts = styled.div`
  position: relative;
  left: ${pxToRem(111)}rem;
`;

const Square = styled.div`
  width: ${pxToRem(75)}rem;;
  height: ${pxToRem(75)}rem;;
  background-color: ${({ theme }) => theme.colors.grey};
  position: absolute;
  top: ${pxToRem(125)}rem;
  left: ${pxToRem(43)}rem;
`;
const Circle = styled.div`
  width: ${pxToRem(75)}rem;;
  height: ${pxToRem(75)}rem;;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  position: absolute;
  top: ${pxToRem(251)}rem;
  left: ${pxToRem(43)}rem;
`;
const Triangles = styled.img`
  position: absolute;
  top: ${pxToRem(380)}rem;
  left: ${pxToRem(43)}rem;
`;
const Texts = styled.img`
  position: absolute;
  top: ${pxToRem(517)}rem;
  left: ${pxToRem(63)}rem;
`;

const FigureScroll = styled.div`
  position: absolute;
  top: ${pxToRem(88)}rem;
  width: ${pxToRem(487)}rem;
  height: ${pxToRem(928)}rem;
  background-color: ${({ theme }) => theme.colors.bg3f};
  overflow: scroll;
  ::-webkit-scrollbar {
    width: ${pxToRem(32)}rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777777;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.bg4f};
  }
`;

export default FigureTab;
