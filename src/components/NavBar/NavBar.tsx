import React from "react";
import Contacts from "src/components/NavBar/Contacts/Contacts";
import styles from "src/components/NavBar/NavBar.module.scss";
import TitleCard from "src/components/NavBar/TitleCard/TitleCard";
import UserCard from "src/components/NavBar/UserCard/UserCard";
import { useAppSelector } from "src/app/hooks";
import { getRequestResult } from "src/models/RequestState";

export default function NavBar() {

    const user = useAppSelector(state => getRequestResult(state.user.request));

    return (
        <nav className={styles.NavBar}>
            <div className={styles.NavBarItem}>
                <TitleCard />
            </div>
            <div className={styles.NavBarItem}>
                TODO: CURRENT TASK, CREATE LIST, STATISTICS
            </div>
            <div className={styles.UserAndContacts}>
                { !!user && <UserCard /> }
                <Contacts />
            </div>
        </nav>
    );
}