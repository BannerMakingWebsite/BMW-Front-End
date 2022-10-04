import React, { useRef, useState } from "react";
import styled from "styled-components";

function ModalContentsImageSize() {
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const [renderer, setRenderer] = useState<number>(0);
  const widthRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const checkKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "+" || e.key === "-" || e.key === "e") e.preventDefault();
  };

  const checkMinMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.replace("0", "") === "")
      e.currentTarget.value = "";

    if (e.currentTarget.value != "") {
      if (parseInt(e.currentTarget.value) < parseInt(e.currentTarget.min)) {
        e.currentTarget.value = e.currentTarget.min;
      }
      if (parseInt(e.currentTarget.value) > parseInt(e.currentTarget.max)) {
        e.currentTarget.value = e.currentTarget.max;
      }
    }
  };

  const checkValidity = () => {
    if (widthRef.current && heightRef.current) {
      console.log(widthRef.current.value);
      console.log(heightRef.current.value);
      if (widthRef.current.value && heightRef.current.value) setIsValid(true);
      else {
        setIsValid(false);
        setRenderer(Math.random());
      }
    }
  };

  return (
    <>
      <Background>
        <div>
          <label htmlFor="width">가로 폭</label>
          <InputWrapper>
            <span>px</span>
            <input
              id="width"
              type="number"
              min={0}
              max={4096}
              onKeyDown={(e) => checkKey(e)}
              onChange={(e) => checkMinMax(e)}
              ref={widthRef}
            />
          </InputWrapper>
        </div>
        <div>
          <label htmlFor="height">세로 폭</label>
          <InputWrapper>
            <span>px</span>
            <input
              id="height"
              type="number"
              min={0}
              max={4096}
              onKeyDown={(e) => checkKey(e)}
              onChange={(e) => checkMinMax(e)}
              ref={heightRef}
            />
          </InputWrapper>
        </div>
        <div>
          {isValid === false && (
            <strong key={renderer}>값을 입력해주세요.</strong>
          )}
          <button onClick={() => checkValidity()}>시작</button>
        </div>
      </Background>
    </>
  );
}

export default ModalContentsImageSize;

const Background = styled.span`
  width: 43.75rem;

  display: flex;

  color: white;

  > div {
    margin-left: 0.75rem;
    margin-right: 0.75rem;

    width: calc(33.333% - 0.75rem);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }

    > strong {
      margin-bottom: 0.5rem;

      color: #ff0000;

      @keyframes fadeIn {
        0% {
          color: #fefefe;
        }
        100% {
          color: #ff0000;
        }
      }

      animation: fadeIn 0.5s ease;
    }
  }

  label {
    margin-bottom: 0.5rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    position: relative;

    background-color: transparent;

    padding-right: 1.5rem;

    width: 100%;
    height: 5rem;

    color: #fefefe;
    font-size: 4rem;

    border: 0;
    border-bottom: 1px solid #aaa;
  }

  button {
    background-color: white;

    width: 100%;
    height: 5rem;

    font-size: 2rem;

    border: none;
    border-radius: 1.5rem;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  position: relative;

  span {
    position: absolute;

    width: 100%;
    height: calc(100% - 0.5rem);

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    color: #aaa;

    user-select: none;
  }
`;
