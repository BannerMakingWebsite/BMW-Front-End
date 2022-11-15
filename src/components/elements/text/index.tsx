import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import ElementWrapper from "..";
import { TextDataType } from "../../../assets/types/elementTypes";
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

  return (
    <ElementWrapper props={{ ...SizeProps, id, type }}>
      <TextToggle {...props} />
    </ElementWrapper>
  );
}

interface TextProps {
  color: string;
  backgroundColor: string;
}

function TextToggle({ backgroundColor, color }: TextProps) {
  const [doubleClicked, setClick] = useState<boolean>(false);
  const [elementList, setElementList] = useRecoilState(ElementListState);
  const [curElementId, setCurElementId] = useRecoilState(CurrentElementState);
  const curElement = elementList.find((value) => value.id == curElementId);
  const setValue = (value: string) => {
    setElementList(
      elementList.map((val) =>
        val.id == curElementId ? { ...val, value } : val
      )
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
      <Wrapper
        backgroundColor={backgroundColor}
        color={color}
        onDoubleClick={() => setClick(true)}
      >
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

const Wrapper = styled.div<{ color: string; backgroundColor: string }>`
  width: 100%;
  height: 100%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
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
