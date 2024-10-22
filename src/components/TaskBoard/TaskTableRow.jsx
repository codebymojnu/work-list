import FavoriteIcon from "../svg/FavoriteIcon";
import NotFavoriteIcon from "../svg/NotFavoriteIcon";

export default function TaskTableRow({
  title,
  description,
  tags,
  priority,
  options,
  isFav,
  handleUpdateTask
}) {

  const task = {
    title,
    description,
    tags,
    priority,
    options,
    isFav
  };
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>{isFav ? <FavoriteIcon /> : <NotFavoriteIcon />}</td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags.map((tag, index) => (
            <li key={index}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500">{options[0]}</button>
          <button className="text-blue-500" onClick={() => handleUpdateTask(task)}>{options[1]}</button>
        </div>
      </td>
    </tr>
  );
}
