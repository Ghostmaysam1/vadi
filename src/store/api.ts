import { defineStore } from "pinia";
import type { ApiResult, RegisterData, LoginData, ForgotPasswordData } from "../types";

interface ApiStore {
    api_link: `http://${string}/${string}`
}

const sendRequest = Symbol("sendRequest");

const useApi = defineStore("api", {
    state: (): ApiStore => ({
        api_link: 'http://localhost:8000/',

    }),
    actions: {
        async [sendRequest](url: (`/auth/${string}` | `/coworker${string}`), data: (LoginData | RegisterData | ForgotPasswordData)) {
            let response = await fetch(this.api_link + url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            ).
                then(response => response.json()).
                then((response): ApiResult => {
                    return { type: 'success', body: response }
                }).catch((error): ApiResult => {
                    return { type: 'error', body: error };
                });

            return response;

        },
        async register(data: RegisterData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/register', data);
        },
        async login(data: LoginData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/login', data);
        },
        async forgotPassword(data: ForgotPasswordData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/forgotPassword', data);
        }
    }
});

export default useApi;