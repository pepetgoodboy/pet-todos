import Image from "next/image";

export default function InputImage({ src, width, height, alt, variant }) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`absolute ${variant}`}
    />
  );
}
