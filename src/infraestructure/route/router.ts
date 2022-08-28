import { Router } from "express"
import bookRoute from "./book/book.route"
import reviewRoute from './review/review.route';

const router = Router()

router.use("/api/v1/books", bookRoute)
router.use("/api/v1/reviews",reviewRoute)

export default router

