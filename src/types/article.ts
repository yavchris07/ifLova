//Article
export interface Article {
    cover: string,
    title: string, //55
    date: string,
    summary: string, //125
    author: string,
    typ: string,
    id: number
}


//User
export interface User {
    id: number,
    names: string,
    email: string,
    password: string,
    rol: string
}

//News Letters
export interface News {
    id: number,
    email: string
}
