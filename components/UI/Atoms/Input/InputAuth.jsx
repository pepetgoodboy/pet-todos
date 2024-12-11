export default function InputAuth({
  type,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full px-12 py-1.5 placeholder:text-sm placeholder:text-white/70 border border-white/70 rounded-md bg-transparent outline-none text-white/80"
    />
  );
}
