import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { PaginatedResponse } from "../models/pagination";
import { store } from "../store/configureStore";
import { history } from "../..";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

// axios.interceptors.request.use(config => {
//     const token = store.getState().account.user?.token;
//     if (token) config.headers!.Authorization = `Bearer ${token}`;
//     return config;
// })

axios.interceptors.response.use(async response => {
    await sleep();
    //console.log(response);
    const pagination = response.headers["pagination"]; //lowercase only
    if (pagination) {
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
        console.log(response);
        return response;
    }
    return response;
}, (error: AxiosError) => {
    console.log("Error caught by Axios Interceptors");
    const { data, status } = error.response as any;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            history.push({
                pathname: "/server-error",
                // state:{error:data}
            });
            toast.error(data.title);
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Todo = {
    list: (params: URLSearchParams) => requests.get('todo', params),
    details: (id: number) => requests.get(`todo/${id}`),
}

const Comment = {
    list: (params: URLSearchParams) => requests.get('comments', params),
    details: (id: number) => requests.get(`comments/${id}`),
}

const Account = {
    login: (values: any) => requests.post('account/login', values),
    register: (values: any) => requests.post('account/register', values),
    currentUser: () => requests.get('account/currentUser'),
}

const agent = {
    Todo,
    Comment,
    Account
}

export default agent;