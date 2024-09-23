export interface Article {
    cover: string,
    title : string, //55
    date : string,
    summary : string, //125
    author : string,
    typ : string
}

export interface User {
    id:number,
    names : string,
    email : string,
    password : string,
    rol : string
}

export interface News {
    id : number,
    email : string
}
