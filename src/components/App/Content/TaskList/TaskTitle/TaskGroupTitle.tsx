import React from 'react';
import styles from "src/components/App/Content/TaskList/TaskTitle/TaskGroupTitle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons/faSquarePlus";

interface TaskGroupTitleAttributes {
    title: string,
}

const TaskGroupTitle = (props: TaskGroupTitleAttributes) => {
    return (
        <div className={styles.TaskGroupTitle}>
            <div className={styles.Filler}></div>
            <h1 className={styles.Title}>{props.title}</h1>
            <div className={styles.Actions}>
                <FontAwesomeIcon className={styles.IconButton} icon={ faSquarePlus }/>
            </div>
        </div>
    );
};

export default TaskGroupTitle;