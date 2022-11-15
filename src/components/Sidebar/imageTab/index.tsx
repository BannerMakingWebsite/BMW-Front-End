import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { modalStateAtom } from "../../../atoms/modalState";
import Collection from "../../collection";
import ModalContentsImageImportMethod from "../../Modal/imageImportMethod";
import Head from "../head";

function ImageTab() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return (
    <Background>
      <Head
        type="inputButton"
        label="이미지 업로드"
        onClick={() =>
          setModalState({
            title: "이미지를 추가할 방법을 선택하세요",
            modalContents: <ModalContentsImageImportMethod />,
          })
        }
      />
      <ContentWrapper>
        <Collection title="업로드 한 이미지" />
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

  > div {
    margin-top: ${pxToRem(25)}rem;
  }
`;

export default ImageTab;
