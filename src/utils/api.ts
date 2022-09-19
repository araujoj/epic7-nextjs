import axios, { AxiosRequestConfig } from 'axios'
import { Hero, HeroInfo } from './types';

async function request(url: string, method: string, data?: string) {
    const payload: AxiosRequestConfig<any> = { method, url, data }
    try {
        const response = await axios.request(payload);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.code, error.message);
        } else {
            console.log(error);
        }
        return undefined
    }
}

export async function getHeroList(): Promise<Hero[] | undefined> {
    const response = await request('/api/hero', 'get');
    if (response) return response.results;
    return response
}

export async function getHeroInfo(id: string): Promise<HeroInfo | undefined> {
    const response = await request(`/api/hero/${id}`, 'get');
    if (response) return response.results[0];
    return response
}

export async function getTierlist(type: string): Promise<Hero[] | undefined> {
    const response = await request(`/tierlist/${type}`, 'get');
    if (response) return response.results;
    return response
}