import Counter from "./Counter";
import Filters from "./Filters";
import ClearButton from "./ClearButton";

function Footer({tasks, filters,setFilters, handleDeleteCompleted}) {
    return (
        <footer className="footer">
            <div className="todo-count">
                <Counter
                    tasks={tasks}
                />
            </div>

            <Filters
                setFilters={setFilters}
                filters={filters}
            />

            {tasks.some((task) => task.status) && (
                <div>
                    <ClearButton
                        handleDeleteCompleted={handleDeleteCompleted}
                    />
                </div>
            )}
        </footer>
    )
}

export default Footer;