import styled from "styled-components";
import { ImageIcons } from "../../assets/images";
function ImageTab() {
  return (
    <Box>
      <SearchBox>
        <ImageUpload>이미지 업로드</ImageUpload>
        <>
          <SearchImage placeholder="검색" />
        </>
        <ImageScroll>
          <Temps src={ImageIcons.Template} />
        </ImageScroll>
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
  height: 9.313rem;
  background-color: #444444;
`;
const ImageUpload = styled.button`
  width: 27.563rem;
  height: 2.188rem;
  border-radius: 1.563rem;
  border: none;
  background-color: #666666;
  margin: 1.625rem 0 0 1.438rem;
  color: white;
  font-size: 1.25rem;
`;
const SearchImage = styled.input`
  width: 27.563rem;
  height: 2.188rem;
  border-radius: 1.563rem;
  border: none;
  background-color: #666666;
  margin: 1.625rem 0 0 1.438rem;
  font-size: 1.25rem;
  color: #aaaaaa;
  outline: none;
  padding-left: 1.25rem;
`;

const ImageScroll = styled.div`
  position: absolute;
  top: 9.313rem;
  width: 30.438rem;
  height: 54.188rem;
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
const Temps = styled.img`
  width: 13.125rem;
  height: 10.938rem;
  margin: 0.75rem 0 0 0.75rem;
`;

export default ImageTab;
