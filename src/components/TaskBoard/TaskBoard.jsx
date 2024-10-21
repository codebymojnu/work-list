import { useState } from "react";
import data from "../../data/tasks";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  const [tasks, setTasks] = useState(data);
  const [showModal, setShowModal] = useState(false);

  function handleAddClick() {
    setShowModal(true);
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            {showModal && (
              <AddTaskModal
                setTasks={setTasks}
                tasks={tasks}
                setShowModal={setShowModal}
              />
            )}
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <TaskAction handleAddClick={handleAddClick} />
            </div>
          </div>
          <div className="overflow-auto">
            <TaskTable tasks={tasks} />
          </div>
        </div>
      </div>
    </section>
  );
}
