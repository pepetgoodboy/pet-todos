"use client";

import Lock from "@/public/lock.png";
import Person from "@/public/person.png";
import SubmitFormAuth from "@/components/UI/Molecules/SubmitFormAuth";
import InputFormAuth from "@/components/UI/Molecules/InputFormAuth";
import AuthLayout from "@/components/Layouts/AuthLayout";
import authStore from "@/store/authStore";

export default function RegisterPage() {
  const { email, password, loading, setEmail, setPassword, signUp } =
    authStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await signUp();
  };

  return (
    <AuthLayout title="Sign Up" onSubmit={handleSignUp}>
      <div className="flex flex-col gap-5">
        <InputFormAuth
          type="email"
          name="email"
          placeholder="EMAIL"
          src={Person}
          width="27"
          height="27"
          alt="Person"
          variant="-mt-8 ml-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputFormAuth
          type="password"
          name="password"
          placeholder="PASSWORD"
          src={Lock}
          width="19"
          height="19"
          alt="Lock"
          variant="-mt-7 ml-[14px]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <SubmitFormAuth
        buttonTitle="SIGN UP"
        href="/"
        option="Already"
        linkTitle="Sign in"
        isLoading={loading}
      />
    </AuthLayout>
  );
}
