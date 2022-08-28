import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Index, ManyToOne} from 'typeorm'
import { Review } from '../../../domain/Review/Review.entity';


@Entity()
@Index(["idBook"])
export class Reviews extends BaseEntity implements Review{

    @PrimaryColumn()
    Id: string

    @Column()
    Description: string

    @Column()
    Points: number  
    
    @Column({default:null})
    idBook: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
    
}