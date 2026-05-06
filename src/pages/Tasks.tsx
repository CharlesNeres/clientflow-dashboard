import { tasks } from "../data/tasks";

function Tasks() {
  return (
    <div>
      <h1>Tasks</h1>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Client</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.client}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
