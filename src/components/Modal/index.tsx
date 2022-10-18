import styled from "styled-components";

interface ModalProps {
  title: string;
  contents: JSX.Element;
}

function Modal({ title, contents }: ModalProps) {
  return (
    <>
      <Filter />
      <Background>
        <Wrapper>
          <Title>
            {title}
            <span>⨉</span>
          </Title>
          <ContentsWrapper>{contents}</ContentsWrapper>
        </Wrapper>
      </Background>
    </>
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
  background-color: #444444;

  width: max-content;

  border-radius: 1.5rem;
`;

const Title = styled.h1`
  position: relative;

  background-color: #555555;

  margin: 0;

  width: 100%;
  height: 5.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fefefe;
  font-size: 2rem;
  font-weight: 400;

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
  padding: 1.5rem;
`;

export default Modal;
