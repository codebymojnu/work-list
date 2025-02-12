import { useState } from "react";
export default function AddTaskModal({ handleAddTask, taskToUpdate }) {
  const [task, setTask] = useState(taskToUpdate || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    options: ["Delete", "Edit"],
    isFav: false,
  });

  function handleChange(e) {
    let value = e.target.value;
    if (e.target.name == "tags") {
      value = value.split(",");
    }
    setTask({ ...task, [e.target.name]: value });
  }

  // isAdd or not
  let isAdd = false;
  if (taskToUpdate === null) {
    isAdd = true;
  }


  return (
    <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0 ">
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? " Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
              onChange={handleChange}
              value={task.title}
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
              onChange={handleChange}
              value={task.description}
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
                onChange={handleChange}
                value={task.tags}
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
                onChange={handleChange}
                value={task.priority}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={(e) => {
              e.preventDefault();
              handleAddTask(task, isAdd)
            }}
          >
            {isAdd ? " Add New Task" : "Update Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
