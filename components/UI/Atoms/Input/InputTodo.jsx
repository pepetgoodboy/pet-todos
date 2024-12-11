export default function InputTodo({ placeholder, value, onChange, width }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className={`${width} outline-none placeholder:text-xs placeholder:md:text-base px-4 py-1.5 border border-primary rounded-md`}
    />
  );
}
