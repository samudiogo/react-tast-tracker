import { Task } from "./Task";
import PropTypes from "prop-types";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((t) => (
        <Task key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};
Tasks.propTypes = {
  onDelete: PropTypes.func,
};

export default Tasks;
