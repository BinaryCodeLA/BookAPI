import { Review } from "./Review.entity"

export interface ReviewRepository {       
    RegisterReview(review : Review): Promise<Review | null> 
    FindByBook(idBook: string): Promise<Review[] | null>  
}