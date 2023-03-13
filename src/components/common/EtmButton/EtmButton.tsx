import { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";
import styles from "src/components/common/EtmButton/EtmButton.module.scss";

const buttonStyles = {
    primary: styles.Primary,
    blank: styles.Blank,
    warn: styles.Warn,
};

type EtmButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: keyof typeof buttonStyles,
    children?: ReactNode,
};

export default function EtmButton({color = "primary", children, ...props}: EtmButtonAttributes) {

    return(
        <button {...props} className={`${styles.EtmButton} ${buttonStyles[color]}`}>
            {children}
        </button>
    );
}