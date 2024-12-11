import InputAuth from "../Atoms/Input/InputAuth";
import InputImage from "../Atoms/Input/InputImage";

export default function InputFormAuth({
  type,
  name,
  placeholder,
  src,
  width,
  height,
  alt,
  variant,
  value,
  onChange,
}) {
  return (
    <div>
      <InputAuth
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        variant={variant}
      />
    </div>
  );
}
