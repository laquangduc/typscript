export class UserAPI {
    public static all() {
        const url: string = "http://localhost:3000/posts"
        return fetch(url, {method: "GET"});

    }
}