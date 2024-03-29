import React from "react";
import { CSSTransition } from "react-transition-group";
import descriptionTransitions from "src/components/App/Content/Workspace/TaskList/TaskRow/TaskDescription/DescriptionTransitions.module.scss";
import styles from "src/components/App/Content/Workspace/TaskList/TaskRow/TaskRow.module.scss";

export default function TaskDescription(props: {
    text: string | undefined,
    folded: boolean
}) {
    return(

        <CSSTransition
            in={!props.folded}
            timeout={200}
            classNames={{...descriptionTransitions}}
            unmountOnExit
        >
            <div className={styles.TaskDescription}>
                { props.text || <em>No description</em> }
            </div>
        </CSSTransition>
    );
}