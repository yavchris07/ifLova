//Article
export interface Article {
    cover: string,
    titre : string, //55
    dats : string,
    resumes : string, //125
    author : string,
    type : string,
    id:number
}


//User
export interface User {
    id:number,
    names : string,
    email : string,
    password : string,
    rol : string
}

//News Letters
export interface News {
    id : number,
    email : string
}
