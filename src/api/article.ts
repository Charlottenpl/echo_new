import net from './net.ts';

const baseUrl = "/api/article/"


/**
 * 获取article详情
 * @param data
 */
export function get(data: any) {
    return net({
        url: baseUrl + 'get',
        method: 'post',
        data: data
    });
}