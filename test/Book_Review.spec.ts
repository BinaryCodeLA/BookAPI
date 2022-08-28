import supertest from "supertest";
import app from "../src/app"
import 'jest'

const api = supertest(app)

const Book = {
    "Id": "783c6968-086f-49bb-93a7-174577ab9877",
    "Title": "Test Title",
    "Author": "Test Author",
    "Year_Public": 2000,
    "Status": true
}

const Review = {
        "Id": "636a9ac0-0ccc-4b03-b90d-b6f4f9fcc49e",
        "Description": "Test Description Review",
        "Points": 3,
        "idBook": "783c6968-086f-49bb-93a7-174577ab9877",
    }

describe("GET /api/v1/books", () => {
    let response:any
    beforeAll(async ()=>{
        response = await api.get("/api/v1/books")
    })
    test("Should be respond with status 200", async () => {  
            expect(response.statusCode).toBe(200)
       
    })

    test("Should have a content-type: application/json in header", async () => {
            expect(response.header["content-type"]).toEqual(
                expect.stringContaining("json")
            )
       
    })

    test("Should Be an Array Object", async () => {
            expect(response.body.length).toBeGreaterThan(0)
      
    })

    test("Should return an object with fields defined", async () => {
            expect(response.body[0].book.Id).toBeDefined()
            expect(response.body[0].book.Id).toEqual(Book.Id)
            expect(response.body[0].book.Title).toEqual(Book.Title)
            expect(response.body[0].book.Author).toEqual(Book.Author)
            expect(response.body[0].book.Year_Public).toEqual(Book.Year_Public)
            expect(response.body[0].book.Status).toBeDefined()
            expect(response.body[0].review).toBeDefined()         
    })
})

describe("POST /api/v1/books", () => {
    let response:any
    beforeAll(async ()=>{
        response = await api.post("/api/v1/books").send({title:"Test Title", author:"Test Author", year:2000})
    })
    test("Should be respond with status 201", async () => {  
            expect(response.statusCode).toBe(201)
       
    })

    test("Should have a content-type: application/json in header", async () => {
            expect(response.header["content-type"]).toEqual(
                expect.stringContaining("json")
            )
       
    })

    test("Should Be an Object", async () => {
            console.log("response.body.book: ", response.body)
            expect(response.body).toBeInstanceOf(Object) 
      
    })

    test("Should return an object with fields defined", async () => {
            expect(response.body.Id).toBeDefined()
            expect(response.body.Id).toEqual(Book.Id)
            expect(response.body.Title).toEqual(Book.Title)
            expect(response.body.Author).toEqual(Book.Author)
            expect(response.body.Year_Public).toEqual(Book.Year_Public)
            expect(response.body.Status).toBeDefined()        
    })
})


describe("PUT /api/v1/books", () => {
    let response:any
    beforeAll(async ()=>{
        response = await api.put("/api/v1/books").send({id:"783c6968-086f-49bb-93a7-174577ab9877",title:"Test Title", author:"Test Author", year:2000})
    })
    test("Should be respond with status 200", async () => {  
            expect(response.statusCode).toBe(200)
       
    })

    test("Should have a content-type: application/json in header", async () => {
            expect(response.header["content-type"]).toEqual(
                expect.stringContaining("json")
            )
       
    })

    test("Response should Be an Number 1", async () => {
            expect(response.body.rowAffected).toEqual(1)       
    })

    test("Should return an object with fields defined", async () => {       
            expect(response.body.rowAffected).toBeDefined()               
    })
})

describe("DELETE /api/v1/books", () => {
    let response:any
    beforeAll(async ()=>{
        response = await api.delete("/api/v1/books/783c6968-086f-49bb-93a7-174577ab9877").send()
    })
    test("Should be respond with status 200", async () => {  
            expect(response.statusCode).toBe(200)
       
    })

    test("Should have a content-type: application/json in header", async () => {
            expect(response.header["content-type"]).toEqual(
                expect.stringContaining("json")
            )
       
    })

    test("Response should Be an Number 1", async () => {           
            expect(response.body.rowAffected).toEqual(1)       
    })

    test("Should return an object with fields defined", async () => {       
            expect(response.body.rowAffected).toBeDefined()               
    })
})


/**
 * TEST FOR REVIEW
 */


 describe("GET /api/v1/reviews/783c6968-086f-49bb-93a7-174577ab9877", () => {
        let response:any
        beforeAll(async ()=>{
            response = await api.get("/api/v1/reviews/783c6968-086f-49bb-93a7-174577ab9877")
        })
        test("Should be respond with status 200", async () => {  
                expect(response.statusCode).toBe(200)
           
        })
    
        test("Should have a content-type: application/json in header", async () => {
                expect(response.header["content-type"]).toEqual(
                    expect.stringContaining("json")
                )
           
        })
    
        test("Should Be an Object", async () => {
                expect(response.body).toBeInstanceOf(Object)
          
        })
    
        test("Should return an object with fields defined", async () => {        
                expect(response.body[0].Id).toBeDefined()
                expect(response.body[0].Id).toEqual(Review.Id)
                expect(response.body[0].Description).toEqual(Review.Description)
                expect(response.body[0].Points).toEqual(Review.Points)
                expect(response.body[0].idBook).toEqual(Review.idBook)              
        })
    })

    describe("POST /api/v1/reviews", () => {
        let response:any
        beforeAll(async ()=>{
            response = await api.post("/api/v1/reviews").send({idBook:Book.Id, description:Review.Description, point: Review.Points})
        })
        test("Should be respond with status 201", async () => {  
                expect(response.statusCode).toBe(201)
           
        })
    
        test("Should have a content-type: application/json in header", async () => {
                expect(response.header["content-type"]).toEqual(
                    expect.stringContaining("json")
                )
           
        })
    
        test("Should Be an Object", async () => {                
                expect(response.body).toBeInstanceOf(Object) 
          
        })
    
        test("Should return an object with fields defined", async () => {
                expect(response.body.Id).toBeDefined()
                expect(response.body.Id).toEqual(Review.Id)
                expect(response.body.Description).toEqual(Review.Description)
                expect(response.body.Points).toEqual(Review.Points)
                expect(response.body.idBook).toEqual(Review.idBook)       
        })
    })