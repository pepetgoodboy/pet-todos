import { create } from "zustand";
import supabase from "@/utils/supabase/client";
import authStore from "./authStore";
import toast from "react-hot-toast";

const todoStore = create((set, get) => ({
  todos: [],
  title: "",
  description: "",
  setTitle: (title) => set({ title }),
  setDescription: (description) => set({ description }),
  // Get Date
  getDate: () => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date();
    const day = weekday[date.getDay()];
    return day;
  },
  // Get Todos
  getTodos: async () => {
    const user = authStore.getState().user;
    const userId = user.id;
    if (!userId) {
      return;
    }

    const { data: todos, error } = await supabase
      .from("todos")
      .select("*")
      .eq("user_id", userId);
    if (error) {
      toast.error(error.message);
      return;
    }

    set({ todos: todos });
  },
  // Add Todo
  addTodo: async () => {
    const { title, description, getTodos } = get();
    const user = authStore.getState().user;
    const userId = user.id;
    if (!userId) {
      toast.error("Please login first!");
      return;
    }

    const { error } = await supabase
      .from("todos")
      .insert([
        {
          title,
          description,
          user_id: userId,
        },
      ])
      .select();

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Todo added successfully!");
    set({ title: "", description: "" });

    getTodos();
  },
  // Mark Todo Done
  markDone: async (id) => {
    const { getTodos } = get();
    const user = authStore.getState().user;
    const userId = user.id;
    if (!userId) {
      toast.error("Please login first!");
      return;
    }
    const { error } = await supabase
      .from("todos")
      .update({ isCompleted: true })
      .eq("id", id)
      .eq("user_id", userId);

    if (error) {
      toast.error(error.message);
      return;
    }

    getTodos();
  },
  // Unmark Todo Done
  unmarkDone: async (id) => {
    const { getTodos } = get();
    const user = authStore.getState().user;
    const userId = user.id;
    if (!userId) {
      toast.error("Please login first!");
      return;
    }
    const { error } = await supabase
      .from("todos")
      .update({ isCompleted: false })
      .eq("id", id)
      .eq("user_id", userId);

    if (error) {
      toast.error(error.message);
      return;
    }

    getTodos();
  },
  // Remove Todo
  removeTodo: async (id) => {
    const { getTodos } = get();
    const user = authStore.getState().user;
    const userId = user.id;
    if (!userId) {
      toast.error("Please login first!");
      return;
    }
    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Todo removed successfully!");

    getTodos();
  },
}));

export default todoStore;
