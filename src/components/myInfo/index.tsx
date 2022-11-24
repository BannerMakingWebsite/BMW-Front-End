import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { patchMyPage } from "../../apis/patchMyPage";
import { pxToRem } from "../../assets/constants/pxToRem";
import { readFile } from "../../assets/constants/readFile";
import { MyPageIcons } from "../../assets/images";
import { UserType } from "../../assets/types/userType";
import { modalStateAtom } from "../../atoms/modalState";
import { userStateAtom } from "../../atoms/userState";
import ModalContentsVerifyEmail from "../Modal/verifyEmail";
import ModalContentsVerifyPassword from "../Modal/verifyPassword";

const MyInfo = () => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const fileRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [editState, setEditState] = useState<boolean>(false);

  return (
    <>
      <Wrapper>
        <ImageWrapper pfp={userState.imageUrl}>
          <input
            ref={fileRef}
            id="img"
            type="file"
            accept="image/*"
            onChange={() => readFile(fileRef, userState, setUserState)}
          />
          <label htmlFor="img">이미지 변경</label>
        </ImageWrapper>
        <NameWrapper>
          {editState ? (
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                if (nameInputRef.current.value != "") {
                  let temp: UserType = Object.assign({}, userState);
                  temp.name = nameInputRef.current.value;
                  setUserState(temp);
                  patchMyPage({
                    imageUrl: userState.imageUrl,
                    name: nameInputRef.current.value,
                  });
                }
                setEditState(!editState);
              }}
            >
              <input ref={nameInputRef} defaultValue={userState.name} />
            </form>
          ) : (
            <h2>{userState.name}</h2>
          )}
          <img
            src={MyPageIcons.Edit}
            alt="edit"
            onClick={() => {
              setEditState(!editState);
              if (nameInputRef.current.value != "") {
                let temp: UserType = Object.assign({}, userState);
                temp.name = nameInputRef.current.value;
                setUserState(temp);
                patchMyPage({
                  imageUrl: userState.imageUrl,
                  name: nameInputRef.current.value,
                });
              }
              setEditState(!editState);
            }}
          />
        </NameWrapper>
        {userState.loginType !== "google" && (
          <>
            <span
              onClick={() =>
                setModalState({
                  title: "비밀번호 변경",
                  modalContents: <ModalContentsVerifyEmail />,
                })
              }
            >
              비밀번호 변경
            </span>
            <span
              onClick={() =>
                setModalState({
                  title: "회원 탈퇴",
                  modalContents: <ModalContentsVerifyPassword />,
                })
              }
            >
              회원 탈퇴
            </span>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default MyInfo;

interface ImageWrapperProps {
  pfp?: string | ArrayBuffer;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;

  width: ${pxToRem(150)}rem;
  height: ${pxToRem(150)}rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 0.25s ease;

  input {
    position: absolute;

    width: 100%;

    display: none;
  }

  label {
    position: absolute;

    width: ${pxToRem(150)}rem;
    height: ${pxToRem(150)}rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: transparent;

    transition: color 0.25s ease;
    cursor: pointer;
  }

  ::before {
    background-repeat: no-repeat;
    ${(props) =>
      props.pfp
        ? `background-image: url(${props.pfp});
  background-size: cover;
  background-position: center;`
        : `background-image: url(${MyPageIcons.User});
  background-size: contain;
  background-position: center;`}

    position: absolute;

    width: ${pxToRem(150)}rem;
    height: ${pxToRem(150)}rem;

    border-radius: 50%;
    transition: filter 0.25s ease;
    content: "";
  }

  :hover {
    ::before {
      filter: brightness(75%) blur(0.15rem);
    }

    label {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const NameWrapper = styled.div`
  margin-top: ${pxToRem(10)}rem;

  display: flex;
  align-items: center;

  > img {
    transform: translateY(0.1rem);

    margin-left: ${pxToRem(8)}rem;

    width: ${pxToRem(25)}rem;
    height: ${pxToRem(25)}rem;

    object-fit: cover;
    transition: filter 0.25s ease;

    ${({ theme }) => theme.common.hoverEffect}
  }

  > h2 {
    width: 100%;

    text-align: center;
    word-break: break-all;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
  }

  input {
    all: unset;

    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};
    font-weight: 600;
    text-align: center;

    border-bottom: 0.1px solid ${({ theme }) => theme.colors.grey};
  }
`;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg2f};

  padding: ${pxToRem(25)}rem;

  width: calc(100% - ${pxToRem(50)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.5rem;

  > span {
    margin-top: ${pxToRem(10)}rem;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.text};
    text-decoration: underline;

    transition: filter 0.25s ease;
    ${({ theme }) => theme.common.hoverEffect}
  }
`;
