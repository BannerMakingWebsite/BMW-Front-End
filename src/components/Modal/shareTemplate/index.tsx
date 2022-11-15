import { useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import { modalStateAtom } from "../../../atoms/modalState";
import Button from "../button";
import ModalInput from "../input";
import ModalContentsTerms from "../terms";

function ModalContentsShareTemplate() {
  const [modalState, setModalState] = useRecoilState(modalStateAtom);

  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Background>
        <img
          src={"https://blog.hubspot.com/hubfs/design-1.jpg"}
          alt="template"
        />

        <ModalInput type="big" label="템플릿 제목" id="template-title" />

        <ModalInput
          type="checkbox"
          label={"BMW의 *이용 약관*에 동의합니다."}
          id="agree"
          changeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            (buttonRef.current.disabled = !e.target.checked)
          }
          onClick={() =>
            setModalState({
              title: "이용 약관",
              modalContents: <ModalContentsTerms />,
            })
          }
        />

        <div>
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
