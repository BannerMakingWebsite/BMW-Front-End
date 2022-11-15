import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { TermsOfUseDiscretion } from "../../../assets/constants/terms";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalContentsShareTemplate from "../shareTemplate";

function ModalContentsTerms() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  return (
    <>
      <Background>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[0]}</p>
          <p>{TermsOfUseDiscretion[1]}</p>
          <p>{TermsOfUseDiscretion[2]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[3]}</p>
          <p>{TermsOfUseDiscretion[4]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[5]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[6]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[7]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{TermsOfUseDiscretion[8]}</p>
          <p>{TermsOfUseDiscretion[9]}</p>
        </PhraseWrapper>
        <Button
          type="big"
          label="돌아가기"
          onClick={() => {
            setModalState({
              title: "템플릿 공유",
              modalContents: <ModalContentsShareTemplate />,
            });
          }}
        />
      </Background>
    </>
  );
}

export default ModalContentsTerms;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhraseWrapper = styled.div`
  margin-bottom: ${pxToRem(25)}rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;
