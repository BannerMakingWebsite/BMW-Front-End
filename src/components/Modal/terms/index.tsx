import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { TermsOfUseDiscretion } from "../../../assets/constants/terms";
import Button from "../button";

function ModalContentsTerms() {
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
        <Button type="big" label="확인" />
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
