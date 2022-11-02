import OptionWithDropdown from "./eachOption/optionWIthDropdown";
import CommonOptionWrapper from "./wrappers/commonOptionWrapper";
import WideOptionWrapper from "./wrappers/wideOptionWrapper";

interface Props<T> {
  name: string;
  onChange: (value: T) => void;
  items: ReadonlyArray<T>;
  value?: T;
  wide?: boolean;
}

function DropDown<T extends string>({
  name,
  onChange,
  value,
  items,
  wide = false,
}: Props<T>) {
  return wide ? (
    <WideOptionWrapper name={name}>
      <OptionWithDropdown
        items={items}
        onChange={onChange}
        width={200}
        value={value}
      />
    </WideOptionWrapper>
  ) : (
    <CommonOptionWrapper name={name}>
      <OptionWithDropdown
        items={items}
        onChange={onChange}
        width={293}
        value={value}
      />
    </CommonOptionWrapper>
  );
}

export default DropDown;
