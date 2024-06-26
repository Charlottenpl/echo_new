import net from './net.ts';

const baseUrl = "/article/"


/**
 * 获取article详情
 * @param data
 */
export function getArticle(data: any) {
    return net({
        url: baseUrl + 'get',
        method: 'post',
        data: data
    });
}