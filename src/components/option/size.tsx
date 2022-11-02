import React from "react";
import OptionWithInput from "./eachOption/optionWIthInput";
import WideOptionWrapper from "./wrappers/wideOptionWrapper";

interface Props {
  name: string;
  onChange: (value: string) => void;
}

function Size({ name, onChange }: Props) {
  return (
    <WideOptionWrapper name={name}>
      <OptionWithInput onChange={onChange} width={200} />
    </WideOptionWrapper>
  );
}
export default Size;
