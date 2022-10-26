import styled from "styled-components";
import { ImageIcons } from "../../assets/images";

function FigureTab() {
  const FigureText = ["원형", "삼각형", "텍스트"];
  return (
    <Box>
      <SearchBox>
        <SearchFigure>
          <>
            <SearchText placeholder="검색" />
          </>
        </SearchFigure>
        <FigureScroll />
        <FigureBox>
          <Square />
          사각형
        </FigureBox>
        {FigureText.map((F) => {
          return (
            <FigureBox2>
              <FigureTexts>{F}</FigureTexts>
            </FigureBox2>
          );
        })}
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
  background-color: #555555;
  position: relative;
`;

const SearchBox = styled.div`
  position: fixed;
  top: 4rem;
  left: 5rem;
  width: 30.438rem;
  height: 5.5rem;
  background-color: #444444;
`;
const SearchFigure = styled.div`
  width: 27.563rem;
  height: 2.188rem;
  border-radius: 1.563rem;
  background-color: #666666;
  margin: 1.625rem 0 0 1.438rem;
`;
const SearchText = styled.input`
  width: 26.563rem;
  height: 2.188rem;
  border-radius: 1.563rem;
  border: none;
  padding-left: 1rem;
  padding-right: 1.5rem;
  background-color: #666666;
  font-size: 1.25rem;
  color: #aaaaaa;
  outline: none;
`;

const FigureBox = styled.div`
  width: 25.313rem;
  height: 6.25rem;
  background-color: #444444;
  position: absolute;
  top: 7.063rem;
  left: 1.563rem;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;
const FigureBox2 = styled.div`
  width: 25.313rem;
  height: 6.25rem;
  background-color: #444444;
  border-radius: 1.563rem;
  position: relative;
  top: 9.438rem;
  left: 1.563rem;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1.625rem;
`;
const FigureTexts = styled.div`
  position: relative;
  left: 6.938rem;
`;

const Square = styled.div`
  width: 4.688rem;
  height: 4.688rem;
  background-color: #aaaaaa;
  margin: 0 20px 0 20px;
`;
const Circle = styled.div`
  width: 4.688rem;
  height: 4.688rem;
  background-color: #aaaaaa;
  border-radius: 50%;
  position: absolute;
  top: 15.688rem;
  left: 2.688rem;
`;
const Triangles = styled.img`
  position: absolute;
  top: 23.75rem;
  left: 2.688rem;
`;
const Texts = styled.img`
  position: absolute;
  top: 32.313rem;
  left: 3.938rem;
`;

const FigureScroll = styled.div`
  position: absolute;
  top: 5.5rem;
  width: 30.438rem;
  height: 58rem;
  background-color: #555555;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #777777;
  }
  ::-webkit-scrollbar-track {
    background-color: #666666;
  }
`;

export default FigureTab;
