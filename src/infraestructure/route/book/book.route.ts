import {Router} from "express"
import { BookUseCase } from '../../../application/Book/BookCase';
import { BookController } from '../../controllers/Book/book.ctrl';
import { BookOrmRepository } from '../../repository/Book/Bookpostgres.respository';
import { ReviewOrmRepository } from '../../repository/Review/Reviewpostgress.respository';
import { MockBookRepository } from '../../repository/Book/MockBook.Repository';
import { MockReviewRepository } from '../../repository/Review/MockReviewpostgress.respository';


const bookRoute  =  Router()
const bookRepo = process.env.Environment == "TEST" ? new MockBookRepository() : new BookOrmRepository()
const reviewRepo = process.env.Environment == "TEST" ? new MockReviewRepository() : new ReviewOrmRepository
// const bookRepo =  new BookOrmRepository()
// const reviewRepo =  new ReviewOrmRepository
const bookUseCase = new BookUseCase(bookRepo,reviewRepo)
const bookControler = new BookController(bookUseCase)

bookRoute.post("/", bookControler.insertBook)
bookRoute.get("/",bookControler.getBooks)
bookRoute.get("/:title",bookControler.getBookByTitle)
bookRoute.put("/",bookControler.updateBook)
bookRoute.delete("/:id",bookControler.deleteBook)

export default bookRoute