import { Review } from '../../../domain/Review/Review.entity';
import { ReviewRepository } from '../../../domain/Review/Review.repository';
import { Reviews } from '../../model/review/review.typeorm.schema';

const MockReview = {
    Id: "636a9ac0-0ccc-4b03-b90d-b6f4f9fcc49e",
    Description: "Test Description Review",
    Points: 3,
    idBook: "783c6968-086f-49bb-93a7-174577ab9877"
}

export class MockReviewRepository implements ReviewRepository {
    async RegisterReview(review: Review): Promise<Review | null> {       
        return MockReview
    }
    async FindByBook(id: string): Promise<Review[] | null> {
        const review = [MockReview,MockReview,MockReview]        
        return review
    }
    
}