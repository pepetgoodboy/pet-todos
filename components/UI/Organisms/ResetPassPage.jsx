"use client";

import Lock from "@/public/lock.png";
import SubmitFormAuth from "@/components/UI/Molecules/SubmitFormAuth";
import InputFormAuth from "@/components/UI/Molecules/InputFormAuth";
import AuthLayout from "@/components/Layouts/AuthLayout";
import authStore from "@/store/authStore";

export default function ResetPassPage() {
  const { password, setPassword, loading } = authStore();

  return (
    <AuthLayout onSubmit="/">
      <div className="flex flex-col gap-5">
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
        buttonTitle="CHANGE PASSWORD"
        href="/"
        linkTitle="Sign Up here"
        isLoading={loading}
      />
    </AuthLayout>
  );
}
