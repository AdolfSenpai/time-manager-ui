import React from "react";
import styles from "src/components/App/Content/Content.module.scss";
import AuthForm from "src/components/App/AuthForm/AuthForm";
import { useAppSelector } from "src/app/hooks";
import { getRequestResult } from "src/models/RequestState";
import { Workspace } from "src/components/App/Content/Workspace/Workspace";

export default function Content() {

    const user = useAppSelector(state => getRequestResult(state.user.request));

    return (
        <div className={styles.Content}>
            {
                !!user && <Workspace/> || <AuthForm/>
            }
        </div>
    );
}