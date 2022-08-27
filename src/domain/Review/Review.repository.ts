import { Review } from "./Review.entity"

export interface ReviewRepository {       
    RegisterBook(review : Review): Promise<Review | null> 
    FindByBook(id: string): Promise<Review[] | []>  
}