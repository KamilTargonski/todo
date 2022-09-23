import React from "react";

function Counter({tasks}) {
    return (
        //jak mam tego react.fragment to mogę wrzucić to bez diva
        //<React.Fragment> lub krócej
        <>
                {tasks.filter((task) => !task.status).length} items left
        </>
        //</React.Fragment>
    )
}

export default Counter;