import {v4 as uuid} from "uuid"
import { Review } from './Review.entity';
export class ReviewValue implements Review{
  
    Id: string;
    Description: string;
    Points: number;
   
    constructor({description, point}:{description:string; point:number}){
        this.Id = uuid();
        this.Description = description;
        this.Points = point;       
    }

}