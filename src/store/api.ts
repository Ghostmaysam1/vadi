import { defineStore } from "pinia";
import type { ApiResult, RegisterData, LoginData, ForgotPasswordData, VerifyConfirmationCodeData, ResetPasswordData, AllowedDataTypes } from "../types";

interface ApiStore {
    api_link: `${'http' | 'https'}://${string}`
}

const sendRequest = Symbol("sendRequest");

const useApi = defineStore("api", {
    state: (): ApiStore => ({
        api_link: 'http://localhost:8000/'
    }),
    actions: {
        async [sendRequest](url: (`/auth/${string}` | `/coworker${string}`), data: AllowedDataTypes) {
            let response = await fetch(this.api_link + url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer TOKEN`
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
        async Register(data: RegisterData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/register', data);
        },
        async Login(data: LoginData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/login', data);
        },
        async ForgotPassword(data: ForgotPasswordData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/forgotPassword', data);
        },
        async VerifyConfirmationCode(data: VerifyConfirmationCodeData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/verifyConfirmationCode', data);
        },
        async ResetPassword(data: ResetPasswordData): Promise<ApiResult> {
            return await this[sendRequest]('/auth/resetPassword', data);
        }
    }
});

export default useApi;