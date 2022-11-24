import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import {
  FigureDataType,
  TextDataType,
} from "../../../assets/types/elementTypes";
import ElementListState, {
  CurrentElementState,
} from "../../../atoms/elementState";
import * as SetOption from "../../option";
import Head from "../head";

function EditFigureTab() {
  const [elementList, setElementList] = useRecoilState(ElementListState);
  const [curElementId, setCurElementId] = useRecoilState(CurrentElementState);
  const [curElement, setCurElement] = useState<FigureDataType | TextDataType>();
  useEffect(() => {
    setCurElement(elementList.find((value) => value.id == curElementId));
  }, [elementList, curElementId]);

  const setOpacity = (opacity = curElement.opacity) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, opacity: opacity } : value
      )
    );
  };
  const setColor = (color = curElement.color) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, color: color } : value
      )
    );
  };
  const setShadowColor = (shadowColor = curElement.shadowColor) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, shadowColor: shadowColor }
          : value
      )
    );
  };
  const setBorderColor = (borderColor = curElement.borderColor) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, borderColor: borderColor }
          : value
      )
    );
  };
  const setRotation = (rotate = curElement.rotate) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, rotate: rotate } : value
      )
    );
  };
  const curIdx: number = elementList.indexOf(curElement);
  const changeArrayOrder = function (
    list: (FigureDataType | TextDataType)[],
    targetIdx: number,
    moveValue: number
  ) {
    if (list.length <= 0) {
      console.log("배열 길이가 짧음");
      return;
    }
    const newPosition = targetIdx + moveValue;
    if (newPosition < 0 || newPosition >= list.length) {
      console.log("이동 불가능");
      return;
    }
    let tempList = [...list];
    let [target] = tempList.splice(targetIdx, 1);
    tempList.splice(newPosition, 0, target);
    setElementList(tempList);
  };

  return (
    <TotalWrapper>
      <Head type="title" title="도형 서식" label="ㅁㄴㅇ" />
      <SetOption.Sort
        onClickFront={() => {
          changeArrayOrder(elementList, curIdx, 1);
          console.log(curIdx);
        }}
        onClickBack={() => {
          changeArrayOrder(elementList, curIdx, -1);
          console.log(curIdx);
        }}
      />
      <SetOption.Flip onClickFront={() => {}} onClickBack={() => {}} />
      <SetOption.Range
        name="불투명도"
        value={curElement?.opacity}
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          setOpacity(value);
        }}
      />
      <SetOption.Color
        name="색상"
        value={curElement?.color}
        onChange={(value) => {
          setColor(value);
        }}
      />
      <SetOption.Color
        name="외곽선"
        value={curElement?.borderColor}
        onChange={(value) => {
          setBorderColor(value);
        }}
      />
      <SetOption.Color
        name="그림자"
        value={curElement?.shadowColor}
        onChange={(value) => {
          setShadowColor(value);
        }}
      />
      <SetOption.Range
        name="각도"
        onChange={(e) => {
          const value = Number(e.currentTarget.value);
          setRotation(value);
        }}
        value={curElement?.rotate}
      />
    </TotalWrapper>
  );
}

export default EditFigureTab;

const TotalWrapper = styled.div`
  position: fixed;
  left: 5rem;
  z-index: 100;
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg3f};
`;
