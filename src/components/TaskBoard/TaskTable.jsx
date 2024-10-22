import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

export default function TaskTable({ tasks, handleUpdateTask }) {
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <thead>
        <TaskTableHeader />
      </thead>
      <tbody>
        {tasks.map((task, i) => (
          <TaskTableRow
            title={task.title}
            description={task.description}
            tags={task.tags}
            priority={task.priority}
            options={task.options}
            isFav={task.isFav}
            handleUpdateTask={handleUpdateTask}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}
