export class Blog {
    private Id: number;
    private Title: string;
    private Pic: string;
    private Content: string;
    private Type: string;
    private CreateTime: string;
    private UpdateTime: string;
    private ClickNum: number;
    private Status: number;

    constructor(id?: number, title?: string, pic?: string, content?: string, type?: string, create_time?: string, update_time?: string, click_num?: number, status?: number) {
        this.Id = id ? id : 0;
        this.Title = title ? title : "";
        this.Pic = pic ? pic : "";
        this.Content = content ? content : "";
        this.Type = type ? type : "";
        this.CreateTime = create_time ? create_time : "";
        this.UpdateTime = update_time ? update_time : "";
        this.ClickNum = click_num ? click_num : 0;
        this.Status = status ? status : 0;
    }

    get id(): number {
        return this.Id;
    }

    set id(value: number) {
        this.Id = value;
    }

    get title(): string {
        return this.Title;
    }

    set title(value: string) {
        this.Title = value;
    }

    get pic(): string {
        return this.Pic;
    }

    set pic(value: string) {
        this.Pic = value;
    }

    get content(): string {
        return this.Content;
    }

    set content(value: string) {
        this.Content = value;
    }

    get type(): string {
        return this.Type;
    }

    set type(value: string) {
        this.Type = value;
    }

    get create_time(): string {
        return this.CreateTime;
    }

    set create_time(value: string) {
        this.CreateTime = value;
    }

    get update_time(): string {
        return this.UpdateTime;
    }

    set update_time(value: string) {
        this.UpdateTime = value;
    }

    get click_num(): number {
        return this.ClickNum;
    }

    set click_num(value: number) {
        this.ClickNum = value;
    }

    get status(): number {
        return this.Status;
    }

    set status(value: number) {
        this.Status = value;
    }

}


// {
//     "Id": 1,
//     "Title": "测试文章",
//     "Pic": "https://",
//     "Content": "# hello",
//     "Type": "1",
//     "CreateTime": "2024-07-05T14:28:26Z",
//     "UpdateTime": "2024-07-05T14:28:26Z",
//     "ClickNum": 0,
//     "Status": 0
// }
export function getBlogFromRes(res: any): Blog {
    const blog: Blog = new Blog();

    blog.id = res.Id;
    blog.title = res.Title;
    blog.pic = res.Pic;
    blog.content = res.Content;
    blog.type = res.Type;
    blog.create_time = res.CreateTime;
    blog.update_time = res.UpdateTime;
    blog.click_num = res.ClickNum;
    blog.status = res.Status;

    return blog;
}