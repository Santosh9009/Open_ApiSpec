import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { Todo } from "./todo";
import { TodosServices , TodoCreationParams} from "./todoServices";

@Route("todos")
export class TodosController extends Controller{
    @Get("{TodoId}")
    public async getTodo(
        @Path() TodoId:string,
    ):Promise<Todo>{
        let todoservice = new TodosServices()
        return todoservice.get(TodoId);
    }
}


