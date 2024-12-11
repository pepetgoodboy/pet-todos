import supabase from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { create } from "zustand";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const authStore = create((set, get) => ({
  user: null,
  email: "",
  password: "",
  loading: false,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setLoading: (loading) => set({ loading }),
  getUser: async () => {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return;
    }

    if (data) {
      set({ user: data.user });
    }
  },
  login: async () => {
    const { email, password } = get();

    set({ loading: true });
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(error.message);
      set({ email: "", password: "", loading: false });
      return;
    }
    toast.success("Login Successfully!");
    const token = localStorage.getItem("sb-ldnxunifjfzzjbldrxxe-auth-token");
    Cookies.set("sb-ldnxunifjfzzjbldrxxe-auth-token", token, {
      expires: 3,
    });
    set({ email: "", password: "", loading: false });
    redirect("/dashboard");
  },
  signUp: async () => {
    const { email, password } = get();

    set({ loading: true });
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(email)) {
      toast.error("Only Gmail addresses are allowed!");
      set({ email: "", password: "", loading: false });
      return;
    }
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "https://pet-todos.vercel.app/verify",
      },
    });

    if (error) {
      toast.error(error.message);
      set({ email: "", password: "", loading: false });
      return;
    }
    toast.success("Please check your email to verify the account.");
    set({ email: "", password: "", loading: false });
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(error.message);
      return;
    }
    Cookies.remove("sb-ldnxunifjfzzjbldrxxe-auth-token");
    redirect("/");
  },
}));

export default authStore;
