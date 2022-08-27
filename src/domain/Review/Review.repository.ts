import { Review } from "./Review.entity"

export interface ReviewRepository {       
    RegisterReview(review : Review): Promise<Review | null> 
    FindByBook(id: string): Promise<Review[] | []>  
}