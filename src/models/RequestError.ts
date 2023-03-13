import { RequestErrorData } from "src/models/RequestErrorData";

export interface RequestError {

    data: RequestErrorData | string;

    status: number;

    statusText: string;
}

export function getRequestErrorText(error: RequestError) {

    let errorText: string;

    if (typeof error.data === "string") {

        errorText = error.data;
    }
    else {

        errorText = !!error.data
            && !!error.data.global
            && !!error.data.global.length
            && "Global errors:\n" + error.data.global.reduce((prev, curr) => `${prev}\n${curr}`)
            || "";
    }

    if (!errorText) {

        errorText = error.statusText;
    }

    return errorText;
}