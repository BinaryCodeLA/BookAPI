import { Request, Response } from 'express';
import { ReviewUseCase } from '../../../application/Review/ReviewCase';


export class ReviewController {
    constructor(private reviewCase: ReviewUseCase){}


    public insertReviw =async ({body}:Request, res: Response) => {
        const {description, point, idBook} = body
        
        if(description == undefined || point == undefined || idBook == undefined)
            return res.status(400).send({"message":"some values are missing"})

        const review = await this.reviewCase.registerReview(description,point, idBook)

        if(review == undefined || review == null)
            return res.status(404).send({"message":"Book not found to add review"})

        res.status(201).send(review)
    }

    public GetReviews =async ({params}: Request, res: Response) => {
        const {id} = params
        if(id == undefined)
            return res.status(400).send({"message":"Book id is missing"})
        const review = await this.reviewCase.getAllReviews({idBook:id})

        if(review == undefined || review == null)
            return res.status(404).send({"message": "No reviews found"})
        res.status(200).send(review)
    }
}