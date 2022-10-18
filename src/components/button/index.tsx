import styled from "styled-components";
import { Google } from "../../assets/images";

interface ButtonProps {
  type: "big" | "small" | "googleLogin";
  label?: string;
  refObj?: React.MutableRefObject<HTMLButtonElement>;
}

const Button = ({ type, label, refObj }: ButtonProps) => {
  return (
    <>
      {type === "small" && (
        <SmallButton type="submit" disabled={refObj && true} ref={refObj}>
          {label}
        </SmallButton>
      )}
      {type === "big" && (
        <BigButton type="submit" disabled={refObj && true} ref={refObj}>
          {label}
        </BigButton>
      )}
      {type === "googleLogin" && (
        <GoogleWrapper>
          <img src={Google} alt="google login" />
          구글 계정으로 로그인
        </GoogleWrapper>
      )}
    </>
  );
};

export default Button;

const SmallButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg1f};

  width: 12.5rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  border: 0.1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1.5rem;
  cursor: pointer;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}
`;

const BigButton = styled.button`
  background-color: ${({ theme }) => theme.colors.bg1f};

  width: 39rem;
  height: 5rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  border: 0.1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1.5rem;
  cursor: pointer;
  transition: filter 0.25s ease;

  :disabled {
    filter: brightness(50%);
  }

  :enabled {
    ${({ theme }) => theme.common.hoverEffect}
  }
`;
const GoogleWrapper = styled.div`
  position: fixed;

  transform: translateY(21rem);

  background-color: ${({ theme }) => theme.colors.bg1f};

  margin-top: 1.5rem;

  width: 39rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.title};

  border: 0.1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 1.5rem;
  cursor: pointer;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}

  img {
    transform: translateY(0.05rem);

    margin-right: 0.625rem;

    width: 2.5rem;
    height: 2.5rem;
  }
`;
