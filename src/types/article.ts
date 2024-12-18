//Article
export interface Article {
    image: string,
    titre: string, //55
    date_article: string,
    resumer: string, //125
    auteur: string,
    type: string,
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
