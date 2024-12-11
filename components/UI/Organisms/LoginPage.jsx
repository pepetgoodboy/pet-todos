"use client";

import Lock from "@/public/lock.png";
import Person from "@/public/person.png";
import SubmitFormAuth from "@/components/UI/Molecules/SubmitFormAuth";
import InputFormAuth from "@/components/UI/Molecules/InputFormAuth";
import AuthLayout from "@/components/Layouts/AuthLayout";
import authStore from "@/store/authStore";

export default function LoginPage() {
  const { email, password, loading, setEmail, setPassword, login } =
    authStore();

  const handleSignIn = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <AuthLayout title="Sign In" onSubmit={handleSignIn}>
      <div className="flex flex-col gap-5">
        <InputFormAuth
          type="email"
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
        buttonTitle="SIGN IN"
        href="/register"
        option="Don't"
        linkTitle="Sign up"
        isLoading={loading}
      />
    </AuthLayout>
  );
}
