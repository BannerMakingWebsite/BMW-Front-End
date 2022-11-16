import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { pxToRem } from "../../../assets/constants/pxToRem";
import {
  FigureDataType,
  TextDataType,
  TextStyleType,
} from "../../../assets/types/elementTypes";
import ElementListState, {
  CurrentElementState,
} from "../../../atoms/elementState";
import * as SetOption from "../../option";
import Head from "../head";

function EditTextTab() {
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
  const setBackgroundColor = (backgroundColor: string) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, backgroundColor: backgroundColor }
          : value
      )
    );
  };
  const setBorderWidth = (borderWidth: number) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, borderWidth: borderWidth }
          : value
      )
    );
  };
  const setFontAlign = (fontAlign: string) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, fontAlign: fontAlign } : value
      )
    );
  };
  const setFontFamily = (fontFamily: string) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, fontFamily: fontFamily } : value
      )
    );
  };
  const setFontSize = (fontSize: number) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId ? { ...value, fontSize: fontSize } : value
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
  const setShadowDirection = (shadowDirection: number) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, shadowDirection: shadowDirection }
          : value
      )
    );
  };
  const setShadowDistance = (shadowDistance: number) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, shadowDistance: shadowDistance }
          : value
      )
    );
  };
  const setShadowOpacity = (shadowOpacity: number) => {
    setElementList(
      elementList.map((value) =>
        value.id == curElementId
          ? { ...value, shadowOpacity: shadowOpacity }
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
  const curIdx: number = elementList.indexOf(curElement);
  const changeArrayOrder = function (
    list: (FigureDataType | TextDataType)[],
    targetIdx: number,
    moveValue: number
  ) {
    if (list.length <= 0) {
      return;
    }
    const newPosition = targetIdx + moveValue;
    if (newPosition < 0 || newPosition >= list.length) {
      return;
    }
    let tempList = [...list];
    let [target] = tempList.splice(targetIdx, 1);
    tempList.splice(newPosition, 0, target);
    setElementList(tempList);
  };
  const setFontStyle = ([value]: TextStyleType) => {
    const fontstyle = (curElement as TextDataType).fontStyle;
    console.log(fontstyle);
    if (Object.values(fontstyle).find((v) => v === value)) {
      // 값이 이미 존재한다면
      const index = Object.values(fontstyle).indexOf(value);
      let newArr = [...fontstyle];
      newArr.splice(index, 1);
      setElementList(
        elementList.map((value) =>
          value.id == curElementId ? { ...value, fontStyle: newArr } : value
        )
      );
      return;
    } else {
      setElementList(
        elementList.map((val) =>
          val.id == curElementId
            ? { ...val, fontStyle: [...fontstyle, value] }
            : val
        )
      );
      return;
    }
  };

  return (
    <TotalWrapper>
      <Head type="title" title="텍스트 서식" />
      <ContentWrapper>
        <SetOption.Sort
          onClickFront={() => {
            changeArrayOrder(elementList, curIdx, 1);
          }}
          onClickBack={() => {
            changeArrayOrder(elementList, curIdx, -1);
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
        <SetOption.DropDown
          items={["default"]}
          value={(curElement as TextDataType)?.fontFamily}
          name="폰트"
          onChange={(value) => {
            setFontFamily(value);
          }}
        />
        <SetOption.DropDown
          items={[
            "4",
            "8",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "18",
            "20",
            "22",
            "24",
            "26",
            "30",
            "34",
            "38",
            "40",
            "48",
            "52",
            "60",
            "70",
            "80",
            "90",
            "100",
            "110",
            "120",
          ]}
          value={(curElement as TextDataType)?.fontSize + ""}
          name="크기"
          onChange={(value) => {
            setFontSize(Number(value));
          }}
        />
        <SetOption.TextAlign
          onChange={(value) => {
            setFontAlign(value);
          }}
        />
        <SetOption.TextStyle
          onChange={(value) => setFontStyle(value)}
          value={(curElement as TextDataType)?.fontStyle}
        />
        <SetOption.Color
          name="글자색"
          value={(curElement as TextDataType)?.color}
          onChange={(value) => {
            setColor(value);
          }}
        />
        <SetOption.Color
          name="배경색"
          value={(curElement as TextDataType)?.backgroundColor}
          onChange={(value) => {
            setBackgroundColor(value);
          }}
        />
        <SetOption.Color
          name="외곽선"
          value={(curElement as TextDataType)?.borderColor}
          onChange={(value) => {
            setBorderColor(value);
          }}
        />
        <SetOption.Range
          name="두께"
          value={(curElement as TextDataType)?.borderWidth}
          onChange={(e) => {
            setBorderWidth(Number(e.currentTarget.value));
          }}
        />
        <SetOption.Color
          name="그림자"
          value={(curElement as TextDataType)?.shadowColor}
          onChange={(value) => {
            setShadowColor(value);
          }}
        />
        <SetOption.Range
          name="방향"
          value={(curElement as TextDataType)?.shadowDirection}
          onChange={(e) => {
            setShadowDirection(Number(e.currentTarget.value));
          }}
        />
        <SetOption.Range
          name="거리"
          value={(curElement as TextDataType)?.shadowDistance}
          onChange={(e) => {
            setShadowDistance(Number(e.currentTarget.value));
          }}
        />
        <SetOption.Range
          name="불투명도"
          value={(curElement as TextDataType)?.shadowOpacity}
          onChange={(e) => {
            setShadowOpacity(Number(e.currentTarget.value));
          }}
        />
      </ContentWrapper>
    </TotalWrapper>
  );
}

export default EditTextTab;

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

const ContentWrapper = styled.div`
  width: ${pxToRem(487)}rem;
  height: calc(100% - ${pxToRem(64)}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-bottom: ${pxToRem(24)}rem;
`;
