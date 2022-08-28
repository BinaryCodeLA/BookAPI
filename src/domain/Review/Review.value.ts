import {v4 as uuid} from "uuid"
import { Review } from './Review.entity';
export class ReviewValue implements Review{
  
    Id: string
    Description: string
    Points: number
    idBook: string
    constructor({description, point, idBook}:{description:string; point:number, idBook:string}){
        this.Id = uuid()
        this.Description = description
        this.Points = point
        this.idBook = idBook      
    }

}