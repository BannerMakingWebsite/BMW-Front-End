import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

const Comment = () => {
  return (
    <Background>
      <img
        alt="profile-picture"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312159161_1247623499138648_3303014646451155890_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=GKeb3JgvYgkAX9OG7Ju&_nc_ht=scontent.xx&oh=03_AdTxSHemNSKFR4MHVJiXwqhnK23qxVQdiWw_MGBTZlE7bQ&oe=6375226D"
      />
      <Wrapper>
        <div>
          <h3>Chinese Designer and Front-end Developer</h3>
          <span>09/13/22</span>
        </div>
        <p>
          Lörem ipsum dinydade dedeligt. Tedena heterorade emedan derat
          androsocial. Disörar eurokäse larar. Bes makeheten ifall fön: i somer
          i beng. Vativis...
        </p>
      </Wrapper>
    </Background>
  );
};

export default Comment;

const Background = styled.div`
  display: inline-flex;
  justify-content: space-between;

  > img {
    width: ${pxToRem(80)}rem;
    height: ${pxToRem(80)}rem;

    border-radius: 50%;
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  width: calc(100% - ${pxToRem(104)}rem);
  height: ${pxToRem(192)}rem;

  display: flex;
  flex-direction: column;

  div {
    display: inline-flex;
    align-items: center;
  }

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.title};

    ${({ theme }) => theme.common.ellipsis}
  }

  span {
    width: max-content;

    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.text};
  }

  p {
    color: ${({ theme }) => theme.colors.grey};
    font-size: ${({ theme }) => theme.fontSizes.text};
  }
`;
