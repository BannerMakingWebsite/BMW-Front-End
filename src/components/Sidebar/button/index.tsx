import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";

interface ButtonProps {
  label: string;
}

const SidebarButton = ({ label }: ButtonProps) => {
  return <Background>{label}</Background>;
};

export default SidebarButton;

const Background = styled.button`
  background-color: ${({ theme }) => theme.colors.bg2f};

  width: ${pxToRem(405)}rem;
  height: ${pxToRem(35)}rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.subText};

  border: none;
`;
