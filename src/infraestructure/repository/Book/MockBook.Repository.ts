import { Book } from '../../../domain/Book/Book.entity';
import { BookRepository } from '../../../domain/Book/Book.repository';



const MockBook = {
    Id: "783c6968-086f-49bb-93a7-174577ab9877",
    Title: "Test Title",
    Author: "Test Author",
    Year_Public: 2000,
    Status: true
}

export class MockBookRepository implements BookRepository {
    async FindByTitle(title: string): Promise<Book | null> {
        if(MockBook.Title == title)
            return MockBook
        return null
    }
    async FindById(id: string): Promise<Book | null> {
        if(MockBook.Id == id)
             return MockBook
        return null
    }
    async ListBooks(): Promise<Book[]> {
        const books = [MockBook, MockBook, MockBook]
        return books
    }
    async RegisterBook(book: Book): Promise<Book | null> {       
        return MockBook
    }
    async UpdateBook(filter: object, updated: object): Promise<number | null> {
        const bookUpdated = 1        
        return bookUpdated
    }
    async RemoveBook(filter: object, removed: object): Promise<number | null> {
        const bookUpdated = 1        
        return bookUpdated
    }
    
}