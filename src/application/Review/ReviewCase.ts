import { BookRepository } from "../../domain/Book/Book.repository";
import { ReviewRepository } from "../../domain/Review/Review.repository"
import { ReviewValue } from '../../domain/Review/Review.value';



export class ReviewUseCase {
    constructor( private readonly reviewRep: ReviewRepository, private readonly bookRepo: BookRepository){}

    public registerBook = async ({description, point, idBook}) => {    
        
        const book = await this.bookRepo.FindById(idBook);
        let reviewCreated: any
        if(book != undefined && book != null){
            const reviewValue = new ReviewValue({description, point,idBook})
            reviewCreated = await this.reviewRep.RegisterReview(reviewValue)
        } 
        return reviewCreated
    }

  
    public getAllBooks = async ({idBook}) => {
        const reviews = await this.reviewRep.FindByBook(idBook)                
        return reviews
    }
  
}