import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { SidebarIcons } from "../../assets/images";

function Sidebar() {
  return (
    <Background>
      <IconsWrapper>
        <Arrow>
          <img src={SidebarIcons.MenuArrow} />
        </Arrow>
        <Icon src={SidebarIcons.Template} name="템플릿" />
        <Icon src={SidebarIcons.Image} name="이미지" />
        <Icon src={SidebarIcons.Figure} name="도형" />
      </IconsWrapper>
      <IconsWrapper>
        <Icon src={SidebarIcons.Account} name="계정" />
        <Icon src={SidebarIcons.Setting} name="설정" />
      </IconsWrapper>
    </Background>
  );
}
export default Sidebar;

interface IconProps {
  name: string;
  src: string;
  onClick?: () => void;
}
function Icon({ name, src, onClick }: IconProps) {
  return (
    <IconWrapper>
      <img src={src} alt="" />
      <p>{name}</p>
    </IconWrapper>
  );
}

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.bg1f};

  position: fixed;
  left: 0;
  bottom: 0;

  width: ${pxToRem(80)}rem;
  height: calc(100vh - ${pxToRem(64)}rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  z-index: 900;
`;

const IconsWrapper = styled.div`
  padding: ${pxToRem(26)}rem;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: ${pxToRem(45)}rem;
  height: ${pxToRem(50)}rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.description};

  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}

  :not(:last-child) {
    margin-bottom: ${pxToRem(40)}rem;
  }
`;

const Arrow = styled.div`
  margin-bottom: ${pxToRem(38)}rem;

  width: ${pxToRem(45)}rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
