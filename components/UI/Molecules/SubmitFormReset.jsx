import ButtonAuth from "../Atoms/Button/ButtonAuth";
import LinkAuth from "../Atoms/Link/LinkAuth";

export default function SubmitFormReset({ buttonTitle, isLoading }) {
  return (
    <div className="flex flex-col gap-2">
      <ButtonAuth title={buttonTitle} isLoading={isLoading} />
      <LinkAuth href="/register" title="Sign Up here" />
      <LinkAuth href="/" title="Login here" />
    </div>
  );
}
