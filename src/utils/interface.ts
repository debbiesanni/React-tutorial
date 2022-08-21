import { Method } from 'axios';

export interface ElementProps {
    target: HTMLInputElement;
}

export interface HttpRequestProps {
    url: string;
    method?: Method;
    data?: Record<string, unknown> | FormData;
    baseUrl?: string;
}

export interface VimeoHttpRequestProps{
    url: string;
    method?: Method;
    data?: Record<string, unknown> | FormData;
    baseUrl?: string;
    headers?: object;

}

export interface RequestConfig {
    baseUrl?: string;
    token?: string;
    body?: Record<string, unknown>;
}

export interface EmbedContentProps {
    type: 'exam' | 'league';
    url: string;
    centreId: string;
    contentId: string;
    passMark?: number;
}
