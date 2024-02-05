import { Todo } from "../Model";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";
import { useState } from "react";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, setTodos, todos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = () => {
    // Enter edit mode
    setEdit(true);
  };

  const handleSave = (id: number) => {
    // Save the edited todo and exit edit mode
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t))
    );
    setEdit(false);
  };

  const handleCancel = () => {
    // Cancel editing and reset the edited text
    setEditTodo(todo.todo);
    setEdit(false);
  };

  return (
    <form
      className="flex mb-4 p-3 py-4 border border-neutral-500 rounded-lg flex-wrap  justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        handleSave(todo.id);
      }}
    >
      {edit ? (
        <>
          <input
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            className=" bg-neutral-950 focus:outline-none border border-neutral-500 rounded-md text-neutral-200 px-2  "
          />
          <div className="flex gap-4  ml-[300px]">
            <span>
              <button className="text-neutral-300" onClick={() => handleSave(todo.id)}>Save</button>
            </span>
            <span>
              <button className="text-neutral-300" onClick={handleCancel}>Cancel</button>
            </span>
          </div>
        </>
      ) : todo.isDone ? (
        <s className="text-neutral-300">{todo.todo}</s>
      ) : (
        <span className="text-neutral-300">{todo.todo}</span>
      )}

      <div className="flex gap-4 mt-1">
        <span>
          <MdEdit
            className="text-white"
            onClick={() => {
              if (!edit && !todo.isDone) {
                handleEdit();
              }
            }}
          />
        </span>
        <span>
          <MdDelete
            className="text-white"
            onClick={() => handleDelete(todo.id)}
          />
        </span>
        <span>
          <MdDone className="text-white" onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
