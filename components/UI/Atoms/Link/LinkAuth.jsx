import Link from "next/link";

export default function LinkAuth({ href, title }) {
  return (
    <Link href={href} className="text-white text-sm hover:font-medium">
      {title}
    </Link>
  );
}
