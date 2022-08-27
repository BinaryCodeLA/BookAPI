import { Router } from "express"
import bookRoute from "./book/book.route"

const router = Router()

router.use("api/v1/books", bookRoute)

export default router