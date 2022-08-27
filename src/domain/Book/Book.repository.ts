import { Book } from "./Book.entity";

export interface BookRepository {
    FindByTitle(title: string): Promise<Book | null>
    ListBooks(): Promise<Book[] | null>
    RegisterBook(book : Book): Promise<Book | null>
    UpdateBook(filter: object, updated: object): Promise<number | null>
    RemoveBook(filter: object, removed: object): Promise<number | null>
}