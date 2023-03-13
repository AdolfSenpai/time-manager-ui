import { useState } from "react";
import React from "react";
import getTasksData from "src/assets/tasks.data";
import styles from "src/components/App/Content/Content.module.scss";
import AuthForm from "src/components/AuthForm/AuthForm";
import TaskList from "src/components/TaskList/TaskList";
import { TaskGroup } from "src/models/TaskGroup";
import { useAppSelector } from "src/app/hooks";
import { getRequestResult } from "src/models/RequestState";

export default function Content() {

    const [taskGroups, setTaskGroups] = useState<TaskGroup[]>(getTasksData());
    const user = useAppSelector(state => getRequestResult(state.user.request));

    return (
        <div className={styles.Content}>
            {
                user
                &&
                <div className={styles.TaskGroups}>
                    {
                        taskGroups?.map(
                            group => <TaskList
                                tasks={group.taskList}
                                name={group.name}
                                key={group.id}
                            />
                        )
                    }
                </div>
                ||
                <AuthForm/>
            }
        </div>
    );
}