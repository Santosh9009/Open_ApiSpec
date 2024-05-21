import {Todo} from './todo'

export type TodoCreationParams = Pick<Todo ,"title" | "description">;


export class TodosServices{
    public get(TodoId:string):Todo{
        return {
            id:TodoId,
            title:"mock title",
            description:"mock desc",
            done:false
        }
    }

    public create(todocreationParams:TodoCreationParams){
        return {
            id: '2',
            status:"Happy",
            ...todocreationParams
        }
    }

}