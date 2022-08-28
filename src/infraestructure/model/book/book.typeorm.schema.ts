import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, Index, OneToMany} from 'typeorm'
import { Book } from '../../../domain/Book/Book.entity';

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

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}