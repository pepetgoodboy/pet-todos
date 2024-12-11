import Link from "next/link";
import ButtonAuth from "../Atoms/Button/ButtonAuth";

export default function SubmitFormAuth({
  buttonTitle,
  isLoading,
  option,
  linkTitle,
  href,
}) {
  return (
    <div className="flex flex-col gap-2">
      <ButtonAuth title={buttonTitle} isLoading={isLoading} />
      <div className="flex flex-col text-sm">
        <p className="text-white">{option} have an account?</p>
        <div className="flex gap-1 text-white">
          <p>{linkTitle}</p>
          <Link href={href} className="hover:underline font-semibold">
            here
          </Link>
        </div>
      </div>
    </div>
  );
}
