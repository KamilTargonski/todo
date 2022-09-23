function TaskInput({value, handleInput, handleAddTask}) {
    return (
        <header className="header">
            <input className="what-todo" type="text" value={value} onChange={handleInput} onKeyUp={handleAddTask} placeholder="What needs to be done?"/>
        </header>
    )
}

export default TaskInput;