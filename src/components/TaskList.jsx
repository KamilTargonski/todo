import TaskItem from "./TaskItem";

function TaskList({tasks, filters, handleChangeStatus, handleDelete}) {
    return (
        <ul className="tasks">
            {tasks
                .filter((task) => filters === 'all' ? true : task.status === filters)
                .map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        handleChangeStatus={handleChangeStatus}
                        handleDelete={handleDelete}/>
                ))}
        </ul>
    )
}

export default TaskList;