import React from "react";
import styles from "src/components/App/App.module.scss";
import Content from "src/components/App/Content/Content";
import NavBar from "src/components/NavBar/NavBar";
import "src/styles/styles.scss";
import { useAppDispatch } from "src/app/hooks";
import { userActions } from "src/feature/user/user-slice";
import { useEffect } from "react";

function App() {

    const dispatch = useAppDispatch();
    useEffect(
        () => { dispatch(userActions.getCurrentUser()) },
        [],
    );

    return (
        <div className={styles.App}>
            <NavBar />
            <Content />
        </div>
    );
}

export default App;
