import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { userStateAtom } from "../../../atoms/userState";
import Collection from "../../collection";
import MyInfo from "../../myInfo";
import Head from "../head";
import LoginTab from "../loginTab";

function MyPageTab() {
  const [userState, setUserState] = useRecoilState(userStateAtom);

  return (
    <>
      {userState.id === 0 ? (
        <LoginTab />
      ) : (
        <Background>
          <Head type="title" title="계정" />
          <ContentWrapper>
            <MyInfo />
            <Collection title="내가 공유한 템플릿" />
            <Collection title="최근에 다운로드한 템플릿" />
          </ContentWrapper>
        </Background>
      )}
    </>
  );
}

export default MyPageTab;

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
  padding-bottom: ${pxToRem(24)}rem;

  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  > div {
    margin-bottom: ${pxToRem(25)}rem;

    :first-of-type {
      margin-top: ${pxToRem(25)}rem;
    }
  }
`;
