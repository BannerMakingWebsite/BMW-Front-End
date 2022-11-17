import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import theme from "../../../styles/theme";
import GoogleLoginButton from "../googleLogin";

interface ButtonProps {
  type: "big" | "small" | "googleLogin";
  label?: string;
  refObj?: React.MutableRefObject<HTMLButtonElement>;
  buttonColor?: string;
  onClick?: () => void;
}

const ModalButton = ({
  type,
  label,
  refObj,
  buttonColor,
  onClick,
}: ButtonProps) => {
  return (
    <>
      {type === "small" && (
        <SmallButton
          type="submit"
          disabled={refObj && true}
          ref={refObj}
          buttonColor={buttonColor}
          onClick={() => onClick && onClick()}
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
          onClick={() => onClick && onClick()}
        >
          {label}
        </BigButton>
      )}
      {type === "googleLogin" && <GoogleLoginButton />}
    </>
  );
};

export default ModalButton;

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
