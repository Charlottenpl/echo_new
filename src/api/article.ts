import net from './net.ts';
import "../bean/Blog.ts"
import {Blog} from "../bean/Blog.ts";

const baseUrl = "/blog/"


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

/**
 * 根据type获取
 * @param data
 */
export function getArticleByType(data: any) {
    return net({
        url: baseUrl + 'getByType',
        method: 'post',
        data: data
    });
}


export function addBlog(blog: Blog){
    return net({
        url: baseUrl + "add",
        method: "post",
        data: blog
    })
}


export function updateBlog(blog: Blog){
    return net.post(baseUrl + "update", {
        blog: blog
    })
}
