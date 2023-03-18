import React from 'react';
import styles from "src/components/common/EtmModalDialogue/EtmModalDialogue.module.scss";
import { useAppSelector } from "src/app/hooks";

export const EtmModalDialogue = () => {

    const children = useAppSelector(state => state.modalDialogue.children);

    return (
        <div className={styles.ModalDialogue}>
            <div className={styles.Content}>
                {children}
            </div>
        </div>
    );
};