import React from "react";
import OptionWithInput from "./eachOption/optionWIthInput";
import WideOptionWrapper from "./wrappers/wideOptionWrapper";

interface Props {
  name: string;
  onChange: (value: string) => void;
  value: string;
}

function Size({ name, onChange, value }: Props) {
  return (
    <WideOptionWrapper name={name}>
      <OptionWithInput onChange={onChange} width={200} value={value} />
    </WideOptionWrapper>
  );
}
export default Size;
