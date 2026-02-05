const request = require("supertest");
const newTodo = require("../mock-data/new-todo.json")
const endpointUrl = "/todos";
const mongoose = require("mongoose")

const app = require("../../app")

describe( endpointUrl, ()=>{
     afterAll( () => {
     mongoose.connection.close();
   });


    it("should return status 201 for createTodo for POST", async ()=>{
       const response = await request(app)
       .post(endpointUrl)
        .send(newTodo)
        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe(newTodo.title)
         expect(response.body.done).toBe(newTodo.done)
    })
      
 })
