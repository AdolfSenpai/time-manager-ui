import { useState } from "react";
import React from "react";
import TaskRow from "src/components/App/Content/Workspace/TaskList/TaskRow/TaskRow";
import { Task } from "src/models/Task";
import classes from "src/components/App/Content/Workspace/TaskList/TaskList.module.scss";
import TaskGroupTitle from "src/components/App/Content/Workspace/TaskList/TaskTitle/TaskGroupTitle";

function TaskList({ name, tasks }: { name: string, tasks: Task[] }) {

    const [taskFolding, setTaskFolding] = useState<{ [key: string]: boolean }>(
        tasks.reduce<{[key: string]: boolean}>(
            (folding, task) => ({ ...folding, [task.id]: true }),
            {}
        )
    );

    const toggleFolding = (taskId: string) => {

        setTaskFolding({ ...taskFolding, [taskId]: !taskFolding[taskId]});
    };

    return (
        <div className={classes.TaskList}>
            <TaskGroupTitle title={name}/>
            <div className={classes.ListOutline}>
                {
                    tasks.map(task =>
                        <TaskRow
                            task={task}
                            folded={taskFolding[task.id]}
                            toggleFolding={toggleFolding}
                            key={task.id}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default TaskList;
