import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Index, ManyToOne} from 'typeorm'
import { Review } from '../../../domain/Review/Review.entity';
import { Books } from '../book/book.typeorm.schema';


@Entity()
@Index(["Book"])
export class Reviews extends BaseEntity implements Review{

    @PrimaryColumn()
    Id: string

    @Column()
    Description: string

    @Column()
    Points: number  
    
    @ManyToOne(()=>Books,(book)=> book.Review)
    Book: Books

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}