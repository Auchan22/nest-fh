import axios from 'axios';

export interface Adapter<T> {
    get: (url: string) => Promise<T>;
    // post: (url: string, payload: Omit<T, "id">) => Promise<T>;
}

export class PokeApiFetchAdapter<T> implements Adapter<T> {
    async get(url: string): Promise<T>{
        const res = await fetch(url);
        const data = await res.json();

        return data;
    }
}

export class PokeApiAdapter<T> implements Adapter<T>{

    private readonly axios = axios;

    async get(url: string){
        const { data } = await this.axios.get<T>(url);
        return data;
    }

    async post(url: string, payload: Omit<T, "id">)
    {
        const { data } = await this.axios.post(url, payload);
        return data;
    }

    async patch(url: string, payload: T)
    {
        return;
    }

    async delete(url: string)
    {
        return;
    }
}