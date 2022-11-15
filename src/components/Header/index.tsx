import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { HeaderIcons } from "../../assets/images";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { modalStateAtom } from "../../atoms/modalState";
import ModalContentsShareTemplate from "../Modal/shareTemplate";
import ModalContentsImageExportMethod from "../Modal/templateExportMethod";

function Header() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return (
    <Background>
      <LeftContents to="/">
        <img src={HeaderIcons.Logo} alt="logo" />
        <h1>BMW</h1>
      </LeftContents>
      <RightContents>
        <button
          onClick={() => {
            setModalState({
              title: "템플릿 공유",
              modalContents: <ModalContentsShareTemplate />,
            });
          }}
        >
          <img src={HeaderIcons.Share} />
        </button>
        <button
          onClick={() => {
            setModalState({
              title: "이미지를 저장할 방법을 선택하여 주세요",
              modalContents: <ModalContentsImageExportMethod />,
            });
          }}
        >
          <span>다운로드</span>
          <img src={HeaderIcons.Download} />
        </button>
      </RightContents>
    </Background>
  );
}
export default Header;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg5f};

  position: fixed;
  left: 0;
  top: 0;

  padding-left: ${pxToRem(8)}rem;
  padding-right: ${pxToRem(8)}rem;

  width: 100vw;
  height: ${pxToRem(64)}rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 900;
`;

const LeftContents = styled(Link)`
  display: flex;

  transition: filter 0.25s ease;

  text-decoration: none;

  ${({ theme }) => theme.common.hoverEffect}

  img {
    margin-right: ${pxToRem(8)}rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: 100;
  }
`;

const RightContents = styled.div`
  display: flex;

  transition: filter 0.25s ease;

  button {
    margin-left: ${pxToRem(8)}rem;

    height: ${pxToRem(48)}rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.white};

    border: none;
    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}

    :nth-of-type(1) {
      width: ${pxToRem(48)}rem;

      border-radius: 50%;

      > img {
        transform: translateX(-0.1rem);
      }
    }

    :nth-of-type(2) {
      width: ${pxToRem(150)}rem;

      display: flex;
      justify-content: space-between;

      border-radius: 1.5rem;

      > img {
        margin-left: ${pxToRem(8)}rem;
        margin-right: ${pxToRem(10)}rem;

        width: ${pxToRem(21)}rem;
      }

      > span {
        padding-left: ${pxToRem(4)}rem;

        width: calc(100% - ${pxToRem(39)}rem);
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: ${({ theme }) => theme.fontSizes.text};

        border-right: 1px solid ${({ theme }) => theme.colors.bg5f};
      }
    }
  }
`;
