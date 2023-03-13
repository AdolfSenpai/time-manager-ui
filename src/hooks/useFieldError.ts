import { RequestState } from "src/models/RequestState";

export default function useFieldError<T>(fieldName: string, requestState: RequestState<T>) {

    return requestState
        && requestState.type === "fail"
        && !!requestState.error
        && !!requestState.error.data
        && typeof requestState.error.data !== "string"
        && requestState.error.data.fields
        && requestState.error.data.fields[fieldName]
        || undefined;
}