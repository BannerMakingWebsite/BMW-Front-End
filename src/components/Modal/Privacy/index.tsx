import styled from "styled-components";
import {
  PrivacyPolicyDiscretion,
  Purpose,
} from "../../../assets/constants/privacy";

function ModalContentsPrivacy() {
  return (
    <>
      <Background>
        <PhraseWrapper>
          <p>{Purpose[0]}</p>
          <p>{Purpose[1]}</p>
        </PhraseWrapper>
        <TitleWrapper>
          <span>수집 항목</span>
          <span>수집 목적</span>
          <span>보유 기간</span>
        </TitleWrapper>
        <ContentWrapper>
          <span>이메일</span>
          <span>이용 고객 식별 및 본인 여부 확인</span>
          <span>회원 탈퇴 시까지</span>
        </ContentWrapper>
        <PhraseWrapper>
          <p>{PrivacyPolicyDiscretion[0]}</p>
          <p>{PrivacyPolicyDiscretion[1]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{PrivacyPolicyDiscretion[2]}</p>
          <p>{PrivacyPolicyDiscretion[3]}</p>
        </PhraseWrapper>
        <PhraseWrapper>
          <p>{PrivacyPolicyDiscretion[4]}</p>
          <p>{PrivacyPolicyDiscretion[5]}</p>
        </PhraseWrapper>
        <div>
          <button>확인</button>
        </div>
      </Background>
    </>
  );
}

export default ModalContentsPrivacy;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  button {
    background-color: ${({ theme }) => theme.colors.bg1f};

    width: 39rem;
    height: 5rem;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};

    border: 0.1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 1.5rem;
    cursor: pointer;
    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }
`;

const TitleWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 0.5rem;

  width: 39rem;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 33.333%;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  width: 39rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 0.1px solid ${({ theme }) => theme.colors.white};
  border-bottom: 0.1px solid ${({ theme }) => theme.colors.white};

  span {
    width: 33.333%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    text-align: center;
  }
`;

const PhraseWrapper = styled.div`
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSizes.text};

  ~ div > p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
