import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import Button from "../button";
import ModalInput from "../input";

function ModalContentsImageSize() {
  return (
    <>
      <Background>
        <ModalInput type="number" label="가로 폭" id="width" />
        <ModalInput type="number" label="세로 폭" id="height" />

        <Button type="small" label="시작" />
      </Background>
    </>
  );
}

export default ModalContentsImageSize;

const Background = styled.div`
  display: flex;
  align-items: flex-end;

  > div {
    margin-left: ${pxToRem(12)}rem;
    margin-right: ${pxToRem(12)}rem;

    :first-of-type {
      margin-left: 0;
    }
  }
`;
