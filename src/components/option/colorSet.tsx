import CommonOptionWrapper from "./wrappers/commonOptionWrapper";
import OptionWithColor from "./eachOption/optionWithColor";

interface Props {
  onChange: (value: string) => void;
  name: string;
  value?: string;
}
function ColorSet({ name, onChange, value }: Props) {
  return (
    <CommonOptionWrapper name={name}>
      <OptionWithColor onChange={onChange} value={value} />
    </CommonOptionWrapper>
  );
}
export default ColorSet;
