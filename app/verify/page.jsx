"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Logo from "@/public/todos.png";
import Image from "next/image";
import Link from "next/link";

export default function Verify() {
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Get hash from url
    const hash = window.location.hash;

    if (hash) {
      const urlParams = new URLSearchParams(hash.substring(1)); // Get Query
      const token = urlParams.get("access_token");
      const type = urlParams.get("type");
      const expires_at = urlParams.get("expires_at");

      if (expires_at && Date.now() > expires_at * 1000) {
        setError(true);
        toast.error("Your token has expired! Please check your email again.");
      } else if (type === "signup" && token) {
        toast.success("Verify account has successful!");
      } else if (!type || !token) {
        setError(true);
        toast.error("Your token is invalid or missing!");
      }
    } else {
      setError(true);
      toast.error("Invalid URL format.");
    }
  }, [router]);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="w-full h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("bgLogin.png")' }}
      >
        <div className="flex flex-col w-1/4 mx-auto h-screen justify-center items-center font-montserrat space-y-10">
          <div className="flex flex-col text-center gap-2 font-borel text-white font-semibold">
            <h3 className="w-56 text-5xl">Pet Todos</h3>
            <h4 className="text-3xl">Verify Account</h4>
          </div>
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            fetchPriority="high"
            priority
            className="w-28 h-28"
          />
          <div className="text-white text-center">
            {error ? (
              <p>
                Your token has expired, please check your email again to confirm
                your account!
              </p>
            ) : (
              <div className="">
                <p>Your account has been activated, please</p>
                <div className="flex gap-1">
                  <p>sign in</p>
                  <Link href="/" className="hover:underline font-semibold">
                    here
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
