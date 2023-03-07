import React from "react";
import Contacts from "src/components/NavBar/Contacts/Contacts";
import styles from "src/components/NavBar/NavBar.module.scss";
import TitleCard from "src/components/NavBar/TitleCard/TitleCard";
import UserCard from "src/components/NavBar/UserCard/UserCard";
import { User } from "src/models/User";

export default function NavBar(props: {user: User | null}) {

    return (
        <nav className={styles.NavBar}>
            <div className={styles.NavBarItem}>
                <TitleCard />
            </div>
            <div className={styles.NavBarItem}>
                TODO: CURRENT TASK, CREATE LIST, STATISTICS
            </div>
            <div className={styles.UserAndContacts}>
                { !! props.user && <UserCard /> }
                <Contacts />
            </div>
        </nav>
    );
}