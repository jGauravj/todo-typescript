
type Props = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}

const InputBox = ({todo , setTodo, handleClick}: Props) => {
  return (
    <div className="text-white">

      <input
        className=" focus:border-neutral-200 bg-neutral-950 py-2 px-3 items-center  rounded-lg focus:outline-none  border border-neutral-700 text-neutral-300 m-4 w-96"
        type="text"
        placeholder="write here"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className=" px-6 rounded-lg border-neutral-700 text-neutral-500 hover:text-neutral-200 duration-200 hover:border-neutral-200 py-2 border"
        onClick={handleClick}
      >
        Add
      </button>

    </div>
  );
};

export default InputBox;
