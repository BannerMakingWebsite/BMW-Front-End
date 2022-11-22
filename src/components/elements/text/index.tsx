import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ElementWrapper from "..";
import {
  TextDataType,
  TextStyleType,
} from "../../../assets/types/elementTypes";
import ElementListState, {
  CurrentElementState,
} from "../../../atoms/elementState";

function Text({ width, height, posX, posY, ...props }: TextDataType) {
  const SizeProps = {
    width,
    height,
    posX,
    posY,
  };
  const id = props.id;
  const type = props.type;

  const TextProps = {
    ...SizeProps,
    ...props,
    id,
  };
  return (
    <ElementWrapper props={{ ...SizeProps, id, type }}>
      <TextToggle props={TextProps} />
    </ElementWrapper>
  );
}

interface TextProps {
  props: TextDataType;
}

function TextToggle({ props }: TextProps) {
  const [doubleClicked, setClick] = useState<boolean>(false);
  const [elementList, setElementList] = useRecoilState(ElementListState);
  const [curElementId, setCurElementId] = useRecoilState(CurrentElementState);
  const curElement = elementList.find((value) => value.id == props.id);
  const setValue = (value: string) => {
    setElementList(
      elementList.map((val) => (val.id == props.id ? { ...val, value } : val))
    );
  };
  const InputRef = useRef(null);
  useEffect(() => {
    if (doubleClicked && InputRef.current) {
      InputRef.current.setSelectionRange(
        (curElement as TextDataType).value.length,
        (curElement as TextDataType).value.length
      );
      InputRef.current.focus();
    }
  }, [doubleClicked]);

  const resizeTextArea = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = "1px";
    e.currentTarget.style.height = 12 + e.currentTarget.scrollHeight + "px";
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setClick(false);
      }}
    >
      <Wrapper {...props} onDoubleClick={() => setClick(true)}>
        {doubleClicked ? (
          <InputMode
            value={(curElement as TextDataType).value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setValue(e.currentTarget.value);
            }}
            onFocus={(e) => {
              e.currentTarget.style.height = "1px";
              e.currentTarget.style.height =
                12 + e.currentTarget.scrollHeight + "px";
            }}
            onKeyDown={resizeTextArea}
            onKeyUp={resizeTextArea}
            ref={InputRef}
          />
        ) : (
          <TextMode>{(curElement as TextDataType).value}</TextMode>
        )}
      </Wrapper>
    </OutsideClickHandler>
  );
}

export default Text;

const Wrapper = styled.div<{
  opacity: number;
  fontFamily: string;
  fontSize: number;
  fontAlign: string;
  fontStyle: TextStyleType;
  color: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  shadowColor: string;
  shadowDirection: number;
  shadowDistance: number;
  shadowOpacity: number;
  rotate:number;
}>`
  width: 100%;
  height: 100%;
  > textarea,
  pre {
    color: ${(props) => props.color};
    font-family: ${(props) => props.fontFamily};
    font-size: ${(props) => props.fontSize}px;
    text-align: ${(props) => props.fontAlign};
    text-decoration: ${(props) =>
        props.fontStyle.includes("underline") && " underline"} ${(props) =>
        props.fontStyle.includes("line-through") && " line-through"};
    font-weight: ${(props) => props.fontStyle.includes("bold") && "bold"};
    font-style: ${(props) => props.fontStyle.includes("italic") && "italic"};
  }
  border: ${(props) => props.borderColor != "" ? props.borderWidth : 0}px solid
    ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  opacity: ${(props) => props.opacity / 100};
  box-shadow: ${(props) =>
    props.shadowColor != ""
      ? props.shadowDirection -
        50 +
        "px " +
        (props.shadowDistance - 50 + "px ") +
        (props.shadowOpacity + "px ") +
        props.shadowColor
      : ""};
        transform: rotate(${(props) => props.rotate - 50}deg);

`;

const TextMode = styled.pre`
  width: 100%;
  height: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  box-sizing: content-box;
  font-size: 12px;
`;
const InputMode = styled.textarea`
  font-size: auto;
  width: 100%;
  height: fit-content;
  resize: none;
  outline: none;
  border: none;
  overflow: visible;
  font-size: 12px;
  box-sizing: content-box;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: rgba(0, 0, 0, 0);
`;
