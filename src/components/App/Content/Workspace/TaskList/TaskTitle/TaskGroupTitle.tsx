import React from 'react';
import { MouseEventHandler } from "react";
import styles from "src/components/App/Content/Workspace/TaskList/TaskTitle/TaskGroupTitle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus";

interface TaskGroupTitleAttributes {
    title: string,
}

const TaskGroupTitle = (props: TaskGroupTitleAttributes) => {

    const plusIconClick: MouseEventHandler = () => {


    }

    return (
        <div className={styles.TaskGroupTitle}>
            <div className={styles.Filler}></div>
            <h1 className={styles.Title}>{props.title}</h1>
            <div className={styles.Actions}>
                <FontAwesomeIcon onClick={plusIconClick} className={styles.IconButton} icon={ faSquarePlus }/>
            </div>
        </div>
    );
};

export default TaskGroupTitle;