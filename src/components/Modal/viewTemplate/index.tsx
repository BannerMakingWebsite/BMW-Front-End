import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { BookmarkTemplate, LikeTemplate } from "../../../apis/score";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { ModalIcons } from "../../../assets/images";
import { TemplateInfoTypes } from "../../../assets/types/templateInfoType";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import Comment from "../comment";

function ModalContentsViewTemplate({
  title,
  tags,
  author,
  id,
  date,
  like,
  favorite,
  comments,
  preview,
  onSubmit,
}: TemplateInfoTypes) {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const Bookmark = useMutation(["bookmark"], () => BookmarkTemplate(id));
  const Like = useMutation(["like"], () => LikeTemplate(id));

  return (
    <Background>
      <BannerImage alt="banner-image" src={preview} />
      <div>
        <Wrapper>
          <Info>
            <h2>제목</h2>
            <h1>{title}</h1>
            <ul>
              {tags.map((v) => {
                return <li>{v}</li>;
              })}
            </ul>
          </Info>
          <div>
            <Info>
              <h2>제작자</h2>
              <h1>{author}</h1>
            </Info>
            <Info>
              <h2>제작일</h2>
              <h1>{date}</h1>
            </Info>
          </div>
          <div>
            <Info>
              <h2>좋아요</h2>
              <div>
                <img
                  src={ModalIcons.Thumb}
                  onClick={() => {
                    Like.mutate();
                  }}
                />
                <h1>{like}</h1>
              </div>
            </Info>
            <Info>
              <h2>즐겨찾기</h2>
              <div>
                <img
                  src={ModalIcons.Favorite}
                  onClick={() => {
                    Bookmark.mutate();
                  }}
                />
                <h1>{favorite}</h1>
              </div>
            </Info>
          </div>
          <Info>
            <h2>댓글 ({comments.length})</h2>
            <Comment />
          </Info>
        </Wrapper>
        <div>
          <Button
            type="small"
            label="취소"
            onClick={() =>
              setModalState({
                title: "",
                modalContents: null,
              })
            }
          />
          <Button
            type="small"
            label="적용"
            buttonColor="white"
            onClick={() => {
              onSubmit();
              setModalState({
                title: "",
                modalContents: null,
              });
            }}
          />
        </div>
      </div>
    </Background>
  );
}

export default ModalContentsViewTemplate;

const Background = styled.div`
  display: flex;

  > div {
    margin-left: ${pxToRem(25)}rem;

    width: ${pxToRem(424)}rem;

    > div:last-of-type {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BannerImage = styled.img`
  width: ${pxToRem(640)}rem;
  height: ${pxToRem(640)}rem;

  border-radius: 1.5rem;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: ${pxToRem(560)}rem;

  > div {
    width: 100%;

    > div {
      width: 50%;
    }
  }
`;

const Info = styled.div`
  display: inline-flex;
  flex-direction: column;

  > div {
    display: flex;

    :last-of-type {
      width: 100%;
    }

    > img {
      margin-right: ${pxToRem(8)}rem;

      transition: filter 0.25s ease;

      ${({ theme }) => theme.common.hoverEffect}
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};

    ${({ theme }) => theme.common.ellipsis}
  }

  h2 {
    margin-top: ${pxToRem(8)}rem;
    margin-bottom: ${pxToRem(8)}rem;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    ${({ theme }) => theme.common.ellipsis}
  }

  ul {
    margin-top: ${pxToRem(8)}rem;

    width: 100%;
    height: ${pxToRem(42.672)}rem;

    list-style: none;

    ${({ theme }) => theme.common.ellipsis}

    > li {
      background-color: ${({ theme }) => theme.colors.bg1f};

      padding: ${pxToRem(8)}rem;
      padding-left: ${pxToRem(16)}rem;
      padding-right: ${pxToRem(16)}rem;
      margin-right: ${pxToRem(8)}rem;

      display: inline-flex;

      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.text};

      ${({ theme }) => theme.common.ellipsis}

      border-radius: 1.5rem;
    }
  }
`;
