import net from './net.ts';

const baseUrl = "/class/"


/**
 * 获取class详情
 * @param data
 */
export function getClass(data: any) {
    return net({
        url: baseUrl + 'get',
        method: 'post',
        data: data
    });
}
/**
 * 获取class左连接文章详情
 * @param data
 */
export function getClassWithArticles(data: any) {
    return net({
        url: baseUrl + 'getWithArticles',
        method: 'post',
        data: data
    });
}