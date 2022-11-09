import { useEffect, useRef, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";
import ElementWrapper from "..";
import { TextDataType } from "../../../assets/types/elementTypes";

function Text({ width, height, posX, posY, ...props }: TextDataType) {
  const SizeProps = {
    width,
    height,
    posX,
    posY,
  };
  const id = props.id
  return (
    <ElementWrapper props={{...SizeProps,id:id}}>
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
  const [text, setText] = useState<string>("글자");
  const [config, setConfig] = useState<TextDataType>();
  const InputRef = useRef(null);
  useEffect(() => {
    if (doubleClicked && InputRef.current) {
      InputRef.current.setSelectionRange(text.length, text.length);
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
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              setText(e.currentTarget.value);
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
          <TextMode>{text}</TextMode>
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
