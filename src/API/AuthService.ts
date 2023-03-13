import httpClient from "src/API/HttpClient";
import { User } from "src/models/User";

export default class AuthService {

    static async signUp(email: string, name: string, password: string): Promise<User> {

            return await httpClient.post("/api/register", {email, name, password})
                .then((response) => response.data as User);
    }

    static async signIn(email: string, password: string): Promise<User> {

        return await httpClient.post("/api/login", {email, password})
            .then((response) => response.data as User);
    }

    static async currentUser(): Promise<User> {

        return await httpClient.get("api/currentUser").then(response => response.data as User);
    }
}