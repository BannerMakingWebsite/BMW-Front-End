import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const SidebarButton = ({ label, onClick }: ButtonProps) => {
  return <Background onClick={() => onClick()}>{label}</Background>;
};

export default SidebarButton;

const Background = styled.button`
  background-color: ${({ theme }) => theme.colors.bg2f};

  width: ${pxToRem(405)}rem;
  height: ${pxToRem(35)}rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subText};

  border: none;
  transition: filter 0.25s ease;

  ${({ theme }) => theme.common.hoverEffect}
`;
