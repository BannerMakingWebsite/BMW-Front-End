import {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { FigureDataType, TextDataType } from "../../assets/types/elementTypes";
import ElementListState, { CurrentElementState } from "../../recoilState";

interface Props {
  children: ReactElement;
  props: {
    id: string;
    width: number;
    height: number;
    posX: number;
    posY: number;
  };
}

function ElementWrapper({ children, props }: Props) {
  const [elementList, setElementList] = useRecoilState(ElementListState);
  const [curElement, setCurElement] = useRecoilState(CurrentElementState);
  const [{ x, y }, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [{ width, height }, setConfig] = useState({
    width: 100,
    height: 100,
  });
  const [isFocus, setFocus] = useState(false);
  const navigate = useNavigate();

  const MAX_SIZE = 10;

  useEffect(() => {
    console.log(width);
  }, [width]);

  const onMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;
      setPosition({
        x: x + deltaX,
        y: y + deltaY,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, { once: true });
  };

  const onResizeTopLeft = (
    clickEvent: React.MouseEvent<Element, MouseEvent>
  ) => {
    clickEvent.stopPropagation();
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;
      setConfig({
        width: width - deltaX > MAX_SIZE ? width - deltaX : MAX_SIZE,
        height: height - deltaY > MAX_SIZE ? height - deltaY : MAX_SIZE,
      });
      setPosition({
        x: width - deltaX > MAX_SIZE ? x + deltaX : x + width - MAX_SIZE,
        y: height - deltaY > MAX_SIZE ? y + deltaY : y + height - MAX_SIZE,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, {
      once: true,
    });
  };

  const onResizeTopRight = (
    clickEvent: React.MouseEvent<Element, MouseEvent>
  ) => {
    clickEvent.stopPropagation();
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;
      setConfig({
        width: width + deltaX > MAX_SIZE ? width + deltaX : MAX_SIZE,
        height: height - deltaY > MAX_SIZE ? height - deltaY : MAX_SIZE,
      });
      setPosition({
        x,
        y: height - deltaY > MAX_SIZE ? y + deltaY : y + height - MAX_SIZE,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, {
      once: true,
    });
  };
  const onResizeBottomLeft = (
    clickEvent: React.MouseEvent<Element, MouseEvent>
  ) => {
    clickEvent.stopPropagation();
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;
      setConfig({
        width: width - deltaX > MAX_SIZE ? width - deltaX : MAX_SIZE,
        height: height + deltaY > MAX_SIZE ? height + deltaY : MAX_SIZE,
      });
      setPosition({
        x: width - deltaX > MAX_SIZE ? x + deltaX : x + width - MAX_SIZE,
        y,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, {
      once: true,
    });
  };
  const onResizeBottomRight = (
    clickEvent: React.MouseEvent<Element, MouseEvent>
  ) => {
    clickEvent.stopPropagation();
    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - clickEvent.clientX;
      const deltaY = moveEvent.clientY - clickEvent.clientY;
      setConfig({
        width: width + deltaX > MAX_SIZE ? width + deltaX : MAX_SIZE,
        height: height + deltaY > MAX_SIZE ? height + deltaY : MAX_SIZE,
      });
    };
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler, {
      once: true,
    });
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setFocus(false)}>
      <ItemWrapper
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: width,
          height: height,
          border: isFocus && "1px solid black",
        }}
        onMouseDown={(e) => {
          onMouseDown(e);
          setFocus(true);
          setCurElement(elementList.find((value) => value.id == props.id));
          console.log(elementList.find((value) => value.id == props.id));
          navigate("/edit/figure");
        }}
      >
        {isFocus && (
          <>
            <Resize
              className="resize"
              top={true}
              left={true}
              onMouseDown={onResizeTopLeft}
            />
            <Resize
              className="resize"
              top={true}
              left={false}
              onMouseDown={onResizeTopRight}
            />
            <Resize
              className="resize"
              top={false}
              left={true}
              onMouseDown={onResizeBottomLeft}
            />
            <Resize
              className="resize"
              top={false}
              left={false}
              onMouseDown={onResizeBottomRight}
            />
          </>
        )}
        {cloneElement(children, {
          width: width,
          height: height,
          isFocus: isFocus,
        })}
      </ItemWrapper>
    </OutsideClickHandler>
  );
}

export default ElementWrapper;

const ItemWrapper = styled.div`
  position: absolute;
  > div:not(.resize) {
    width: 100%;
    height: 100%;
  }
`;

const Resize = styled.div<{ top: boolean; left: boolean }>`
  border: 1px solid black;
  width: 10px;
  height: 10px;
  background-color: red;
  position: absolute;
  z-index: 100;
  top: ${(props) => props.top && "-5px"};
  bottom: ${(props) => !props.top && "-5px"};
  left: ${(props) => props.left && "-5px"};
  right: ${(props) => !props.left && "-5px"}; ;
`;
