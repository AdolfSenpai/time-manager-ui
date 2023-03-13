import { RequestError } from "src/models/RequestError";

/**
 * Начальное состояние запроса.
 */
interface RequestInitialState {
    type: "initial";
}

/**
 * Состояние обработки запроса.
 */
interface RequestPendingState {
    type: "pending";
}

/**
 * Состояние успешно обработанного запроса.
 */
interface RequestSuccessState<T = never> {
    type: "success";
    result?: T;
}

/**
 * Состояние проваленного запроса.
 */
interface RequestFailState {
    type: "fail";
    error: RequestError;
}

/**
 * Функция, формирующая начальное состояние запроса.
 */
const initial = (): RequestInitialState => ({ type: "initial" });

/**
 * Функция, формирующая состояние запроса в обработке.
 */
const pending = (): RequestPendingState => ({ type: "pending" });

/**
 * Функция, формирующая состояние успешно обработанного запроса.
 *
 * @param result Результат обработки запроса. Опциональный параметр.
 */
const success = <T = never> (result?: T): RequestSuccessState<T> => {

    return !!result && { type: "success", result } || { type: "success" };
}

/**
 * Функция, формирующая состояние проваленного запроса.
 *
 * @param error Ошибка при обработке запроса.
 */
const fail = (error: RequestError): RequestFailState => ({ type: "fail", error });

/**
 * Тип, объединяющий все состояние запроса.
 */
export type RequestState<T = never> = RequestInitialState
    | RequestSuccessState<T>
    | RequestFailState
    | RequestPendingState;

/**
 * Объединение функций для формирования состояния запроса.
 */
export const requestState = {
    initial,
    pending,
    success,
    fail,
}

/**
 * Возвращает результат выполнения запроса, при его наличии.
 *
 * @param requestState Состояние запроса.
 */
export function getRequestResult<T>(requestState: RequestState<T>): T | undefined {

    if (requestState && requestState.type === "success") {

        return requestState.result;
    }
}
