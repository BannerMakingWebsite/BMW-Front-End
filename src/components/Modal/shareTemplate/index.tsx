import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsTerms from "../terms";
import { TempUpload } from "../../../apis/tempUpload";
import ElementListState, { CaptureRefState } from "../../../atoms/elementState";
import html2canvas from "html2canvas";

function ModalContentsShareTemplate() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [elementList] = useRecoilState(ElementListState);
  const [ref] = useRecoilState(CaptureRefState);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [prev, setPrev] = useState("");

  useEffect(() => {
    const element = ref.current;
    console.log(inputRef.current);
    html2canvas(element).then((value) => {
      console.log(value.toDataURL("image/jpg"));
      setPrev(value.toDataURL("image/jpg"));
    });
  }, [inputRef.current]);

  const onPost = () => {
    TempUpload(
      "template",
      JSON.stringify(elementList),
      inputRef.current.value,
      prev
    );
  };

  return (
    <>
      <Background>
        <img src={prev} alt="template" onClick={onPost} />
        <ModalInput
          type="big"
          refObj={inputRef}
          label="템플릿 제목"
          id="template-title"
        />
        <ModalInput
          type="checkbox"
          label={"BMW의 *이용 약관*에 동의합니다."}
          id="agree"
          refObj={buttonRef}
          onClick={() =>
            setModalState({
              title: "이용 약관",
              modalContents: <ModalContentsTerms />,
            })
          }
        />

        <div
          onClick={() => {
            onPost();
          }}
        >
          <Button type="big" label="게시" refObj={buttonRef} />
        </div>
      </Background>
    </>
  );
}

export default ModalContentsShareTemplate;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  img {
    margin-bottom: ${pxToRem(25)}rem;
    width: ${pxToRem(624)}rem;
    height: ${pxToRem(425)}rem;
    border-radius: 1.5rem;
    object-fit: cover;
  }
`;
