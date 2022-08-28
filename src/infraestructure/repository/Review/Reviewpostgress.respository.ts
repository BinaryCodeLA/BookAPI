import { Review } from '../../../domain/Review/Review.entity';
import { ReviewRepository } from '../../../domain/Review/Review.repository';
import { Reviews } from '../../model/review/review.typeorm.schema';

export class ReviewOrmRepository implements ReviewRepository {
    async RegisterReview(review: Review): Promise<Review | null> {
        const reviewSave = await Reviews.save({
            Id: review.Id,
            Description: review.Description,
            Points: review.Points,
            idBook: review.idBook
        })
        return reviewSave
    }
    async FindByBook(id: string): Promise<Review[] | null> {
        const review = await Reviews.findBy<Reviews>({idBook: id})        
        return review
    }
    
}