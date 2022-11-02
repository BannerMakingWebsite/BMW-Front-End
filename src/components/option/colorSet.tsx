import CommonOptionWrapper from "./wrappers/commonOptionWrapper";
import OptionWithColor from "./eachOption/optionWithColor";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
function ColorSet({ name, onChange }: Props) {
  return (
    <CommonOptionWrapper name={name}>
      <OptionWithColor onChange={onChange} />
    </CommonOptionWrapper>
  );
}
export default ColorSet;
