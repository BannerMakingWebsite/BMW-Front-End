import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { modalStateAtom } from "../../atoms/modalState";
import { createPortal } from "react-dom";

interface ModalProps {
  title: string;
  children: JSX.Element;
}

function Modal({ title, children }: ModalProps) {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return createPortal(
    <>
      <Filter />
      <Background>
        <Wrapper>
          <Title>
            {title}
            <span
              onClick={() =>
                setModalState({
                  title: "",
                  modalContents: null,
                })
              }
            >
              ⨉
            </span>
          </Title>
          <ContentsWrapper>{children}</ContentsWrapper>
        </Wrapper>
      </Background>
    </>,
    document.getElementById("modal")
  );
}

const Filter = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.5);

  width: 200vw;
  height: 200vh;

  filter: blur(0.25rem);
  z-index: 998;
`;

const Background = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};

  width: max-content;

  border-radius: 1.5rem;
`;

const Title = styled.h1`
  position: relative;

  background-color: ${({ theme }) => theme.colors.bg3f};

  margin: 0;

  width: 100%;
  height: ${pxToRem(88)}rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;

  > span {
    position: absolute;

    margin-left: calc(100% - 4.5rem);

    display: flex;
    justify-content: flex-end;

    cursor: pointer;
  }
`;

const ContentsWrapper = styled.div`
  padding: ${pxToRem(25)}rem;
`;

export default Modal;
