import { Spinner } from "@nextui-org/react";

export default function ButtonAuth({ title, isLoading }) {
  return (
    <button
      type="submit"
      className="bg-white/90 hover:bg-white w-full px-3 py-1.5 text-[#2148C0] hover:font-bold font-semibold rounded-md drop-shadow-md"
    >
      {isLoading ? <Spinner size="sm" color="primary" /> : title}
    </button>
  );
}
