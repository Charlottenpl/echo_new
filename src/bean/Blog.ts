class Blog {
    private _id: number;
    private _title: string;
    private _pic: string;
    private _content: string;
    private _type: string;
    private _create_time: string;
    private _update_time: string;
    private _click_num: number;
    private _status: number;

    constructor(id?: number, title?: string, pic?: string, content?: string, type?: string, create_time?: string, update_time?: string, click_num?: number, status?: number) {
        this._id = id ? id : 0;
        this._title = title ? title : "";
        this._pic = pic ? pic : "";
        this._content = content ? content : "";
        this._type = type ? type : "";
        this._create_time = create_time ? create_time : "";
        this._update_time = update_time ? update_time : "";
        this._click_num = click_num ? click_num : 0;
        this._status = status ? status : 0;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get pic(): string {
        return this._pic;
    }

    set pic(value: string) {
        this._pic = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get create_time(): string {
        return this._create_time;
    }

    set create_time(value: string) {
        this._create_time = value;
    }

    get update_time(): string {
        return this._update_time;
    }

    set update_time(value: string) {
        this._update_time = value;
    }

    get click_num(): number {
        return this._click_num;
    }

    set click_num(value: number) {
        this._click_num = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
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