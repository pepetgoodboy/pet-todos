import Link from "next/link";
import Logo from "@/public/todos.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      className="w-full h-screen bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: 'url("bgLogin.png")' }}
    >
      <div className="flex flex-col w-1/4 mx-auto h-screen justify-center items-center space-y-10">
        <div className="flex flex-col text-center gap-2 font-borel text-white font-semibold">
          <h3 className="w-56 text-5xl">Pet Todos</h3>
          <h4 className="text-3xl">404</h4>
        </div>
        <Image
          src={Logo}
          alt="Logo"
          loading="eager"
          fetchPriority="high"
          priority
          className="w-28 h-28"
        />
        <div className="flex flex-col gap-1 text-white text-center font-montserrat">
          <h4 className="text-2xl font-semibold">Page not found.</h4>
          <Link href="/" className="font-medium">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
