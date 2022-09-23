function TaskItem({task, handleChangeStatus, handleDelete}) {
    return (
        <li className="task">
            <span className={task.status ? 'status active' : 'status'}
                  onClick={() => {handleChangeStatus(task)}}>
            </span>
            <span className="span-task">
                {task.name}
            </span>
            <button className="task-delete" onClick={() => handleDelete(task)}>
                x
            </button>
        </li>
    )
}

export default TaskItem;