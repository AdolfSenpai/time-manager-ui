import React from "react";
import styles from "src/components/App/Content/Content.module.scss";
import AuthForm from "src/components/App/AuthForm/AuthForm";
import TaskList from "src/components/App/Content/TaskList/TaskList";
import { useAppSelector } from "src/app/hooks";
import { getRequestResult } from "src/models/RequestState";
import { useEffect } from "react";
import { useAppDispatch } from "src/app/hooks";
import { tasksActions } from "src/feature/tasks/tasks-slice";

export default function Content() {

    const user = useAppSelector(state => getRequestResult(state.user.request));
    const dispatch = useAppDispatch();
    const taskList = useAppSelector(state => state.tasks.taskList);

    useEffect(() => { dispatch(tasksActions.getAll()) }, []);

    return (
        <div className={styles.Content}>
            {
                user
                &&
                <div className={styles.TaskGroups}>
                    <TaskList
                        tasks={taskList}
                        name={"Test"}
                    />
                </div>
                ||
                <AuthForm/>
            }
        </div>
    );
}