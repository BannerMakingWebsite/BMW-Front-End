import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
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
  background-color: ${({ theme }) => theme.colors.bg3f};
  position: relative;
`;

const SearchBox = styled.div`
  position: fixed;
  top: ${pxToRem(64)}rem;
  left: ${pxToRem(80)}rem;
  width: ${pxToRem(487)}rem;
  height: ${pxToRem(149)}rem;
  background-color: ${({ theme }) => theme.colors.bg2f};
`;
const ImageUpload = styled.button`
  width: ${pxToRem(441)}rem;
  height: ${pxToRem(35)}rem;
  border-radius: ${pxToRem(25)}rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg4f};
  margin: ${pxToRem(26)}rem 0 0 ${pxToRem(23)}rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.text};
`;
const SearchImage = styled.input`
  width: ${pxToRem(441)}rem;
  height: ${pxToRem(35)}rem;
  border-radius: ${pxToRem(25)}rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.bg4f};
  margin: ${pxToRem(26)}rem 0 0 ${pxToRem(23)}rem;
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.grey};
  outline: none;
  padding-left: ${pxToRem(25)}rem;
`;

const ImageScroll = styled.div`
  position: absolute;
  top: ${pxToRem(149)}rem;
  width: ${pxToRem(487)}rem;
  height: ${pxToRem(867)}rem;
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
const Temps = styled.img`
  width: ${pxToRem(210)}rem;
  height: ${pxToRem(175)}rem;
  margin: ${pxToRem(12)}rem 0 0 ${pxToRem(12)}rem;
`;

export default ImageTab;
