import { IoTrash } from "react-icons/io5";
import { MdClose, MdOutlineDone } from "react-icons/md";
import todoStore from "@/store/todoStore";

export default function TableTodo() {
  const { todos, markDone, unmarkDone, removeTodo } = todoStore();
  return (
    <div className="border border-gray-300 rounded-lg overflow-auto">
      <table className="min-w-full">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2 text-center font-medium w-1/12">No.</th>
            <th className="px-4 py-2 text-center font-medium w-3/12">Title</th>
            <th className="px-4 py-2 text-center font-medium w-4/12">
              Description
            </th>
            <th className="px-4 py-2 text-center font-medium w-1/12">Status</th>
            <th className="px-4 py-2 text-center font-medium w-2/12">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 text-gray-700">
          {todos && todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr key={index}>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                  {index + 1}.
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm text-center ${
                    todo.isCompleted ? "line-through" : "no-underline"
                  }`}
                >
                  {todo.title}
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm text-wrap ${
                    todo.isCompleted ? "line-through" : "no-underline"
                  }`}
                >
                  {todo.description}
                </td>
                <td className="flex flex-col text-center gap-1 px-4 py-3 whitespace-nowrap text-sm">
                  <p className="font-medium">
                    {todo.isCompleted ? "Complete" : "Uncompleted"}
                  </p>
                  <p className="text-xs">
                    {new Date(todo.created_at).toLocaleString("id-ID")}
                  </p>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm">
                  <div className="flex flex-col gap-2">
                    <div
                      onClick={
                        todo.isCompleted
                          ? () => unmarkDone(todo.id)
                          : () => markDone(todo.id)
                      }
                      className="flex gap-2 text-xs mt-[2px] italic cursor-pointer"
                    >
                      <p className="font-semibold">
                        {todo.isCompleted ? "Unmark" : "Mark"} as done
                      </p>
                      <div className="flex items-center">
                        {todo.isCompleted ? (
                          <MdClose className="text-red-500 text-base" />
                        ) : (
                          <MdOutlineDone className="text-green-500 text-base" />
                        )}
                      </div>
                    </div>
                    <div
                      onClick={() => removeTodo(todo.id)}
                      className="flex gap-2 text-xs mt-[2px] italic cursor-pointer"
                    >
                      <p className="font-semibold">Delete</p>
                      <div className="flex items-center">
                        <IoTrash className="text-base text-red-500" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="px-4 py-4 whitespace-nowrap text-sm text-center"
              >
                Todos not found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
