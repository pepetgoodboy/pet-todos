import { LuLogOut } from "react-icons/lu";

export default function ButtonLogout({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-4 py-1.5 md:text-lg text-white font-semibold bg-primary rounded-md"
    >
      <LuLogOut />
    </button>
  );
}
