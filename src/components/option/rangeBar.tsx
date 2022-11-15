import OptionWithRange from "./eachOption/optionWithRange";
import RangeOptionWrapper from "./wrappers/rangeOptionWrapper";

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
}

function OpacityOption({ name, onChange,value }: Props) {
  return (
    <RangeOptionWrapper name={name}>
      <OptionWithRange onChange={onChange} value={value} />
    </RangeOptionWrapper>
  );
}

export default OpacityOption;
