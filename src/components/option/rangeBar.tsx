import OptionWithRange from "./eachOption/optionWithRange";
import RangeOptionWrapper from "./wrappers/rangeOptionWrapper";

interface Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function OpacityOption({ name, onChange }: Props) {
  return (
    <RangeOptionWrapper name={name}>
      <OptionWithRange onChange={onChange} />
    </RangeOptionWrapper>
  );
}

export default OpacityOption;
