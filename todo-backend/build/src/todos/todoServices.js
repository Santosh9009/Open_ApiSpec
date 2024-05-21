"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosServices = void 0;
class TodosServices {
    get(TodoId) {
        return {
            id: TodoId,
            title: "mock title",
            description: "mock desc",
            done: false
        };
    }
    create(todocreationParams) {
        return Object.assign({ id: '2', status: "Happy" }, todocreationParams);
    }
}
exports.TodosServices = TodosServices;
