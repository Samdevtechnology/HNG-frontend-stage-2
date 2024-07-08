interface InputProps {
  placeholder?: string;
}

const Input = ({ placeholder = "" }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className=" text-sm w-full py-2 px-4 border border-secondary  outline-none placeholder:text-text_primary"
    />
  );
};

export default Input;
