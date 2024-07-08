interface SelectProps {
  placeholder?: string;
}

const Select = ({ placeholder = "" }: SelectProps) => {
  return (
    <select className=" text-sm w-full py-2 px-3 border border-secondary  outline-none placeholder:text-text_primary">
      <option value="">{placeholder}</option>
      <option value="">option 1</option>
      <option value="">option 2</option>
      <option value="">option 3</option>
    </select>
  );
};

export default Select;
