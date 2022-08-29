import { Request, Response } from 'express';
import { BookUseCase } from '../../../application/Book/BookCase';

export class BookController {
    constructor(private bookCase: BookUseCase){}


    public insertBook =async ({body}:Request, res: Response) => {
        const {title, author, year} = body
        
        if(title == undefined || author == undefined || year == undefined)
            return res.status(400).send({"message":"some values are missing"})

        const book = await this.bookCase.registerBook(title,author, year)

        if(book == undefined || book == null)
            return res.status(500).send({"message":"Something was wrong, book is not saved"})

        res.status(201).send(book)
    }


    public getBookByTitle =async ({params}: Request, res: Response) => {
        const { title } = params

        if(title == undefined)
            return res.status(400).send({"message":"title is missing"})
            
        const book = await this.bookCase.getBookDetailByTitle(`${title}`)

        if(book.book == undefined || book.book == null)
            return res.status(404).send({"message":"Book not found"})
        
        res.status(200).send(book)
    }

    public getBooks =async ({query}: Request, res: Response) => {          
            
        const book = await this.bookCase.getAllBooks()

        if(book == undefined || book == null)
            return res.status(404).send({"message":"Books not found"})
        
        res.status(200).send(book)
    }

    public updateBook = async ({body}: Request, res: Response) => {
        const {id, title, author, year} = body

        if(id == undefined || title == undefined || author == undefined || year == undefined)
            return res.status(400).send({"message":"some values are missing"})

        const bookUpdate = await this.bookCase.updateBook(id,title,author, year)
        if(bookUpdate <= 0){
             res.status(404).send({"message": "book not foud"})
        }else{
            res.status(200).send({"rowAffected": bookUpdate})
        }
    }

    public deleteBook = async ({params}: Request, res: Response) => {
        const {id} = params       
        if(id == undefined )
            return res.status(400).send({"message":"Book Id is missing"})

        const bookUpdate = await this.bookCase.deleteBook(`${id}`)
        if(bookUpdate <= 0){
             res.status(404).send({"message": "book not foud"})
        }else{
            res.status(200).send({"rowAffected": bookUpdate})
        }
    }
}

function year(title: string, author: string, year: any) {
    throw new Error('Function not implemented.');
}
