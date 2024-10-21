import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

export default function TaskTable({ tasks }) {
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
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}
