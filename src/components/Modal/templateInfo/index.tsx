import styled from "styled-components";
import { Favorite, Thumb } from "../../../assets/images";
import { TemplateInfoTypes } from "../../../assets/types/templateInfoType";
import Button from "../../button";
import Comment from "../../comment";

function ModalContentsTemplateInfo({
  title,
  tags,
  author,
  date,
  like,
  favorite,
  comments,
}: TemplateInfoTypes) {
  return (
    <Background>
      <BannerImage
        alt="banner-image"
        src="https://cdn.dribbble.com/users/1625099/screenshots/14580528/media/d4535805429570af166acbd939358209.png?compress=1&resize=400x300"
      />
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
                <img src={Thumb} />
                <h1>{like}</h1>
              </div>
            </Info>
            <Info>
              <h2>즐겨찾기</h2>
              <div>
                <img src={Favorite} />
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
          <Button type="small" label="취소" />
          <Button type="small" label="적용" buttonColor="white" />
        </div>
      </div>
    </Background>
  );
}

export default ModalContentsTemplateInfo;

const Background = styled.div`
  display: flex;

  > div {
    margin-left: 1.5rem;

    width: 26.5rem;

    > div:last-of-type {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BannerImage = styled.img`
  width: 40rem;
  height: 40rem;

  border-radius: 1.5rem;
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: 35rem;

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
      margin-right: 0.5rem;

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
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.subTitle};

    ${({ theme }) => theme.common.ellipsis}
  }

  ul {
    margin-top: 0.25rem;

    width: 100%;
    height: 2.667rem;

    list-style: none;

    ${({ theme }) => theme.common.ellipsis}

    > li {
      background-color: ${({ theme }) => theme.colors.bg1f};

      padding: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-right: 0.5rem;

      display: inline-flex;

      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.text};

      ${({ theme }) => theme.common.ellipsis}

      border-radius: 1.5rem;
    }
  }
`;
