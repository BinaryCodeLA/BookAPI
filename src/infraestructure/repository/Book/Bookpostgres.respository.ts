import { Book } from '../../../domain/Book/Book.entity';
import { BookRepository } from '../../../domain/Book/Book.repository';
import { Books } from '../../model/book/book.typeorm.schema';

export class BookOrmRepository implements BookRepository {
    async FindByTitle(title: string): Promise<Book | null> {
        const book = await Books.findOneBy<Books>({Title: title, Status:true})
        return book
    }
    async FindById(id: string): Promise<Book | null> {
        const book = await Books.findOneBy<Books>({Id: id, Status:true})
        return book
    }
    async ListBooks(status=true): Promise<Book[]> {
        const books = await Books.findBy<Books>({Status:true})
        return books
    }
    async RegisterBook(book: Book): Promise<Book | null> {
        const bookSave = await Books.save({
            Id: book.Id,
            Title: book.Title,
            Author: book.Author,
            Year_Public: book.Year_Public,
            Status: book.Status
        })
        return bookSave
    }
    async UpdateBook(filter: object, updated: object): Promise<number | null> {
        const bookUpdated = await Books.update(filter,updated)
        let NumberAffected = bookUpdated.affected || 0
        return NumberAffected
    }
    async RemoveBook(filter: object, removed: object): Promise<number | null> {
        const bookDeleted = await Books.update(filter,removed)
        let NumberAffected = bookDeleted.affected || 0
        return NumberAffected
    }
    
}