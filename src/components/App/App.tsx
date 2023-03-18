import React from "react";
import { useEffect } from "react";
import styles from "src/components/App/App.module.scss";
import Content from "src/components/App/Content/Content";
import NavBar from "src/components/App/NavBar/NavBar";
import "src/styles/styles.scss";
import { useAppDispatch } from "src/app/hooks";
import { useAppSelector } from "src/app/hooks";
import { userActions } from "src/feature/user/user-slice";
import { EtmModalDialogue } from "src/components/common/EtmModalDialogue/EtmModalDialogue";

function App() {

    const dispatch = useAppDispatch();
    const dialogOpened = useAppSelector(state => state.modalDialogue.opened);
    useEffect(
        () => { dispatch(userActions.getCurrentUser()) },
        [],
    );

    return (
        <div className={styles.App}>
            { dialogOpened && <EtmModalDialogue /> }
            <NavBar />
            <Content />
        </div>
    );
}

export default App;
