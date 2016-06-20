export interface IBook {
    id: string
    slug: string
    title: string
}

export class Book implements IBook {
    id: string
    slug: string
    title: string
};