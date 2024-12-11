"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import authStore from "@/store/authStore";
import todoStore from "@/store/todoStore";
import InputTodo from "@/components/UI/Atoms/Input/InputTodo";
import ButtonAddTodo from "@/components/UI/Atoms/Button/ButtonAddTodo";
import TableTodo from "@/components/UI/Molecules/TableTodo";
import ButtonLogout from "../Atoms/Button/ButtonLogout";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const { user, getUser, logout } = authStore();
  const {
    getTodos,
    getDate,
    title,
    description,
    setTitle,
    setDescription,
    addTodo,
  } = todoStore();

  useEffect(() => {
    const fetchUser = async () => {
      await getUser();
      setLoading(false);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      getTodos(user.id);
    }
  }, [user]);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    addTodo();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-11/12 md:w-5/6 lg:w-4/6 mx-auto py-10">
        <div className="pt-6 font-montserrat">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <h1 className="text-5xl font-borel text-primary font-semibold text-center">
                Pet Todos
              </h1>
              <h2 className="text-center font-semibold text-2xl text-primary">
                To Do List {getDate()}
              </h2>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium text-sm md:text-base">
                Hello{" "}
                <span className="text-primary font-semibold">
                  {loading ? "..." : user.email}
                </span>
              </p>
              <ButtonLogout onClick={handleLogout} />
            </div>
            <div className="flex flex-col gap-5">
              <form onSubmit={handleAddTodo} className="flex gap-2">
                <InputTodo
                  width="w-1/3"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <InputTodo
                  width="w-1/2"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <ButtonAddTodo />
              </form>
              <TableTodo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
