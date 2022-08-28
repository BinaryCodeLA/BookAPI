import {Router} from "express"
import { ReviewUseCase } from "../../../application/Review/ReviewCase";
import { BookOrmRepository } from '../../repository/Book/Bookpostgres.respository';
import { ReviewOrmRepository } from '../../repository/Review/Reviewpostgress.respository';
import {MockBookRepository} from "../../repository/Book/MockBook.Repository"
import { ReviewController } from "../../controllers/Review/review.ctrl";
import { MockReviewRepository } from "../../repository/Review/MockReviewpostgress.respository";

const reviewRoute  =  Router()
const bookRepo = process.env.Environment == "TEST" ? new MockBookRepository() : new BookOrmRepository()
const reviewRepo = process.env.Environment == "TEST" ? new MockReviewRepository() : new ReviewOrmRepository
// const bookRepo = new BookOrmRepository()
// const reviewRepo = new ReviewOrmRepository
const reviewUseCase = new ReviewUseCase(reviewRepo,bookRepo)
const reviewControler = new ReviewController(reviewUseCase)

reviewRoute.post("/", reviewControler.insertReviw)
reviewRoute.get("/:id",reviewControler.GetReviews)


export default reviewRoute