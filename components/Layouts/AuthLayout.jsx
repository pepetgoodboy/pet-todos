"use client";

import Image from "next/image";
import Logo from "@/public/todos.png";
import { Toaster } from "react-hot-toast";

export default function AuthLayout({ title, onSubmit, children }) {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="w-full h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("bgLogin.png")' }}
      >
        <div className="flex flex-col w-1/4 mx-auto h-screen justify-center items-center space-y-10">
          <div className="flex flex-col text-center gap-2 font-borel text-white font-semibold">
            <h3 className="text-5xl">Pet Todos</h3>
            <h4 className="text-3xl">{title}</h4>
          </div>
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            fetchPriority="high"
            priority
            className="w-28 h-28"
          />
          <form
            onSubmit={onSubmit}
            className="w-72 flex flex-col gap-10 font-montserrat"
          >
            {children}
          </form>
        </div>
      </div>
    </>
  );
}
