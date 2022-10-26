import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pxToRem } from "../../assets/constants/pxToRem";
import { SidebarIcons } from "../../assets/images";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Background>
      <IconsWrapper>
        <Arrow turn={location.pathname == "/"} onClick={() => navigate("/")}>
          <img src={SidebarIcons.MenuArrow} />
        </Arrow>
        <Icon src={SidebarIcons.Template} name="템플릿" path="/template" />
        <Icon src={SidebarIcons.Image} name="이미지" path="/image" />
        <Icon src={SidebarIcons.Figure} name="도형" path="/figure" />
      </IconsWrapper>
      <IconsWrapper>
        <Icon src={SidebarIcons.Account} name="계정" path="/account" />
        <Icon src={SidebarIcons.Setting} name="설정" path="/setting" />
      </IconsWrapper>
    </Background>
  );
}
export default Sidebar;

interface IconProps {
  name: string;
  src: string;
  path: string;
}
function Icon({ name, src, path }: IconProps) {
  const navigate = useNavigate();
  return (
    <IconWrapper
      onClick={() => navigate(path)}
      style={{
        backgroundColor:
          window.location.pathname == path ? "rgba(255,255,255,0.3)" : "unset",
      }}
    >
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
  padding: ${pxToRem(26)}rem 0;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: ${pxToRem(85)}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.description};
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect}
  transition: 0.2s;
  > p {
    margin-top: ${pxToRem(5)}rem;
  }
`;

const Arrow = styled.div<{ turn: boolean | any }>`
  margin-bottom: ${pxToRem(28)}rem;
  width: ${pxToRem(45)}rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.25s ease;
  ${({ theme }) => theme.common.hoverEffect};
  transform: ${(props) => props.turn && "rotate(180deg)"};
  transition: 0.2s;
`;
