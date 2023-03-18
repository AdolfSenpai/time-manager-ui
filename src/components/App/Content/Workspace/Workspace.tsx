import * as React from 'react';
import { useEffect } from "react";
import TaskList from "src/components/App/Content/Workspace/TaskList/TaskList";
import { useAppDispatch } from "src/app/hooks";
import { useAppSelector } from "src/app/hooks";
import { tasksActions } from "src/feature/tasks/tasks-slice";
import styles from "src/components/App/Content/Workspace/Workspace.module.scss";

export const Workspace = () => {

    const dispatch = useAppDispatch();
    const taskList = useAppSelector(state => state.tasks.taskList);

    useEffect(() => { dispatch(tasksActions.getAll()) }, []);

    return (
        <div className={styles.Workspace}>
            <TaskList
                tasks={taskList}
                name={"Test"}
            />
        </div>
    );
};