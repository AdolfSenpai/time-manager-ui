import React, { MouseEventHandler, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "src/components/App/AuthForm/AuthForm.module.scss";
import EtmButton from "src/components/common/EtmButton/EtmButton";
import EtmInput from "src/components/common/EtmInput/EtmInput";
import { useAppSelector } from "src/app/hooks";
import { useAppDispatch } from "src/app/hooks";
import { userActions } from "src/feature/user/user-slice";
import useFieldError from "src/hooks/useFieldError";
import { getRequestErrorText } from "src/models/RequestError";

export default function AuthForm() {

    const [isRegistration, setIsRegistration] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const userRequestState = useAppSelector(state => state.user.request);
    const dispatch = useAppDispatch();

    const errors = {
        email: [ useFieldError("email", userRequestState) ],
        name: [ useFieldError("name", userRequestState) ],
        password: [ useFieldError("password", userRequestState) ],
    }

    const signUp: MouseEventHandler = async (event) => {
        event.preventDefault();

        if (!isRegistration) {
            setIsRegistration(true);
            return;
        }

        dispatch(userActions.signUp({email, name, password}));
    }

    const signIn: MouseEventHandler = async (event) => {
        event.preventDefault();
        dispatch(userActions.signIn({email, password}));
    }

    return(
        <form className={styles.AuthForm}>
            <div>{
                userRequestState.type === "fail" && getRequestErrorText(userRequestState.error)
                || userRequestState.type === "fail" && getRequestErrorText(userRequestState.error)
            }</div>
            <EtmInput
                type="text"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fieldErrors={errors.email}
            />
            <CSSTransition in={isRegistration} timeout={300} unmountOnExit>
                <EtmInput
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    fieldErrors={errors.name}
                />
            </CSSTransition>
            <div className={styles.Password}>
                <EtmInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fieldErrors={errors.password}
                />
            </div>
            <div className={styles.Buttons}>
                <CSSTransition in={!isRegistration} timeout={300} unmountOnExit>
                    <EtmButton onClick={signIn}>Sign In</EtmButton>
                </CSSTransition>
                <EtmButton onClick={signUp} color="blank">Sign Up</EtmButton>
            </div>
        </form>
    );
}