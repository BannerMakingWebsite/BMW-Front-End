import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { Icons } from "../../assets/images";

function Sidebar() {
  return (
    <Background>
      <IconsWrapper>
        <Arrow>
          <img src={Icons.MenuArrow} />
        </Arrow>
        <Icon src={Icons.Template} name="템플릿" />
        <Icon src={Icons.Image} name="이미지" />
        <Icon src={Icons.Figure} name="도형" />
      </IconsWrapper>
      <IconsWrapper>
        <Icon src={Icons.Account} name="계정" />
        <Icon src={Icons.Setting} name="설정" />
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
  z-index: 900;
  position: fixed;
  height: calc(100vh - 4rem);
  width: 5rem;
  left: 0px;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.bg1f};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const IconsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px;
`;

const IconWrapper = styled.div`
  width: ${pxToRem(45)}rem;
  height: ${pxToRem(50)}rem;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
  :not(:last-child) {
    margin-bottom: ${pxToRem(40)}rem;
  }
`;

const Arrow = styled.div`
  width: ${pxToRem(45)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${pxToRem(38)}rem;
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
`;
