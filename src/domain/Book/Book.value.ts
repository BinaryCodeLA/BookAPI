import { Book } from "./Book.entity"
import {v4 as uuid} from "uuid"
export class BookValue implements Book{
    Id: string;
    Title: string;
    Author: string;
    Year_Public: number;
    
    constructor({title, author, year}:{title:string; author:string, year: number}){
        this.Id = uuid();
        this.Title = title;
        this.Author = author;
        this.Year_Public = year;        
    }
   
}