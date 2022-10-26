import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { ModalIcons } from "../../assets/images";
import theme from "../../styles/theme";

interface ButtonProps {
  type: "big" | "small" | "googleLogin";
  label?: string;
  refObj?: React.MutableRefObject<HTMLButtonElement>;
  buttonColor?: string;
}

const Button = ({ type, label, refObj, buttonColor }: ButtonProps) => {
  return (
    <>
      {type === "small" && (
        <SmallButton
          type="submit"
          disabled={refObj && true}
          ref={refObj}
          buttonColor={buttonColor}
        >
          {label}
        </SmallButton>
      )}
      {type === "big" && (
        <BigButton
          type="submit"
          disabled={refObj && true}
          ref={refObj}
          buttonColor={buttonColor}
        >
          {label}
        </BigButton>
      )}
      {type === "googleLogin" && (
        <GoogleWrapper>
          <img src={ModalIcons.Google} alt="google login" />
          구글 계정으로 로그인
        </GoogleWrapper>
      )}
    </>
  );
};

export default Button;

interface ButtonStyleProps {
  buttonColor: string;
}

const SmallButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : theme.colors.bg1f};

  width: ${pxToRem(200)}rem;
  height: ${pxToRem(80)}rem;

  color: ${(props) =>
    props.buttonColor ? theme.colors.black : theme.colors.white};
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

const BigButton = styled.button<ButtonStyleProps>`
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : theme.colors.bg1f};

  width: ${pxToRem(624)}rem;
  height: ${pxToRem(80)}rem;

  color: ${(props) =>
    props.buttonColor ? theme.colors.black : theme.colors.white};
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

  transform: translateY(${pxToRem(336)}rem);

  background-color: ${({ theme }) => theme.colors.bg1f};

  margin-top: ${pxToRem(24)}rem;

  width: ${pxToRem(624)}rem;
  height: ${pxToRem(80)}rem;

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
    transform: translateY(${pxToRem(0.8)}rem);

    margin-right: ${pxToRem(8)}rem;

    width: ${pxToRem(40)}rem;
    height: ${pxToRem(40)}rem;
  }
`;
