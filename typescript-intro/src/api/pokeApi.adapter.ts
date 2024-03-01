import axios from 'axios';

export class PokeApiAdapter{

    private readonly axios = axios;

    async get(url: string){
        const { data } = await this.axios.get(url);
        return data;
    }

    async post(url: string, payload: any)
    {
        const { data } = await this.axios.post(url, payload);
        return data;
    }

    async patch(url: string, payload: any)
    {
        return;
    }

    async delete(url: string)
    {
        return;
    }
}