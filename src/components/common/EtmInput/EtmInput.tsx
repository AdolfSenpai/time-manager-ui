import React from "react";
import { InputHTMLAttributes } from "react";
import styles from "src/components/common/EtmInput/EtmInput.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MouseEventHandler } from "react";

type EtmInputAttributes = InputHTMLAttributes<HTMLInputElement> & {
    fieldErrors?: (string | undefined)[]
};

export default function EtmInput({fieldErrors, ...props}: EtmInputAttributes) {

    const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

    const togglePasswordShow: MouseEventHandler = (event) => {
        event.preventDefault();
        setIsPasswordShown(!isPasswordShown);
    };

    const getInputType = () => props.type === "password" && (isPasswordShown && "text" || "password") || props.type;

    return(
        <div className={styles.EtmInput}>
            <div className={styles.InputRow}>
                <input {...props} type={getInputType()}/>
                {
                    props.type === "password" &&
                    (
                        isPasswordShown
                        && <FontAwesomeIcon
                            onClick={togglePasswordShow}
                            className={styles.PasswordIcon}
                            icon={faEye}
                        />
                        || <FontAwesomeIcon
                            onClick={togglePasswordShow}
                            className={styles.PasswordIcon}
                            icon={faEyeSlash}
                        />
                    )
                }
            </div>
            <div className={styles.BorderBottom}/>
            {
                !!fieldErrors && fieldErrors.filter(Boolean).map(error =>
                    <span key={error} className={styles.ErrorText}>{error}</span>
                )
            }
        </div>
    );
}