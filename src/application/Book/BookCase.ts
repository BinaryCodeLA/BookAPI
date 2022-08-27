import { BookRepository } from '../../domain/Book/Book.repository';
import { BookValue } from '../../domain/Book/Book.value';
import { ReviewRepository } from '../../domain/Review/Review.repository';

export class BookUseCase {
    constructor(private readonly bookRepo: BookRepository, private readonly reviewRep: ReviewRepository){}

    public registerBook = async ({title, author, year}) => {
        
        const bookValue = new BookValue({title, author, year })
        const bookCreated = await this.bookRepo.RegisterBook(bookValue)
        return bookCreated
    }

    public getBookDetailByTitle =async (title:string) => {
        const book = await this.bookRepo.FindByTitle(title)
        const idBook = book?.Id || ""
        const reviews = await this.reviewRep.FindByBook(idBook)

        const BookResult = {

            book,
            review: reviews
        }


        return BookResult
    }
    public getAllBooks = async () => {
        const book = await this.bookRepo.ListBooks()
        let BookResult: any[] = []
       for (const item of book) {        
        let reviews = await this.reviewRep.FindByBook(item.Id)
        let bookResult = {
            book: item,
            review: reviews
        }
        BookResult.push(bookResult)
       }
         
        return BookResult
    }
    public updateBook = async (id: string, title: string, author: string, year: number) => {
        const filter = { Id: id }
        const update = { Title: title, Author: author, Year_Public: year }
        const result = await this.bookRepo.UpdateBook(filter, update)        
        return result
    }

    public deleteBook = async (id: string) => {
        const filter = { Id: id }
        const update = {Status: false}
        const result = await this.bookRepo.RemoveBook(filter,update)
        return result
    }

}