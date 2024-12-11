"use client";

import Person from "@/public/person.png";
import InputFormAuth from "@/components/UI/Molecules/InputFormAuth";
import AuthLayout from "@/components/Layouts/AuthLayout";
import SubmitFormReset from "../Molecules/SubmitFormReset";
import authStore from "@/store/authStore";

export default function ForgotPassPage() {
  const { email, setEmail, loading, forgotPass } = authStore();

  const handleForgotPass = async (e) => {
    e.preventDefault();
    forgotPass();
  };

  return (
    <AuthLayout onSubmit={handleForgotPass}>
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
      </div>
      <SubmitFormReset buttonTitle="RESET PASSWORD" isLoading={loading} />
    </AuthLayout>
  );
}
