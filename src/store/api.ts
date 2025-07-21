import { defineStore } from "pinia";
import type { ApiResult, RegisterData } from "../types";

interface ApiStore {
    api_link: `http://${string}/${string}`
}

const useApi = defineStore("api", {
    state: (): ApiStore => ({
        api_link: 'http://localhost:8000/',

    }),
    actions: {
        async register(data: RegisterData): Promise<ApiResult> {
            let response =  await fetch(this.api_link + '/auth/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            ).
            then(response=>response.json()).
            then((response): ApiResult =>{
                return {type: 'success', body: response}
            }).catch((error): ApiResult =>{
                return {type: 'error', body: error};
            });

            return response;
        }
    }
});

export default useApi;