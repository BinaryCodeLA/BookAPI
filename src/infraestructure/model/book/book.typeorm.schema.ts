import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Index, OneToMany} from 'typeorm'
import { Book } from '../../../domain/Book/Book.entity';
import { Reviews } from '../review/review.typeorm.schema';

@Entity()
@Index(["Title"])
@Index(["Id"])
export class Books extends BaseEntity implements Book {
   
    @PrimaryColumn()
    Id: string

    @Column()
    Title: string

    @Column()
    Author: string

    @Column()
    Year_Public: number

    @Column()
    Status: boolean

    @OneToMany(()=>Reviews,(review)=> review.Book)
    Review: Reviews[]

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}