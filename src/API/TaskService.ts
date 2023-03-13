import { Task } from "src/models/Task";
import httpClient from "src/API/HttpClient";

export default class TaskService {

    static getAll = async (): Promise<Task[]> => await httpClient.get("api/task/all")
        .then(response => response.data as Task[]);
}
