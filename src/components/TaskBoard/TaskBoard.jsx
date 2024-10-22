import { useState } from "react";
import data from "../../data/tasks";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  const [tasks, setTasks] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(task, isAdd) {
    console.log(task, isAdd)
    if (isAdd) {
      setTasks([...tasks, task])
    }
    else {
      const result = tasks.map(t => {
        console.log(t.id, task.id)
        if (t.priority === task.priority) {
          return task;
        }
        else {
          return t;
        }
      })
      setTasks(result);
      console.log(tasks)
    }
    setShowModal(false);
  }

  function handleUpdateTask(task) {
    setTaskToUpdate(task);
    setShowModal(true);
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <SearchTask />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex ">
            {showModal && (
              <AddTaskModal
                handleAddTask={handleAddTask}
                taskToUpdate={taskToUpdate}
              />
            )}
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <TaskAction onAddClick={() => setShowModal(true)} />
            </div>
          </div>
          <div className="overflow-auto">
            <TaskTable tasks={tasks} handleUpdateTask={handleUpdateTask} />
          </div>
        </div>
      </div>
    </section>
  );
}
