import {Component, OnInit} from "angular2/core";
import {ITodo} from "./todo";
import {TodoFilterPipe} from "./todo-filter.pipe";
import {TodoService} from "./todo.service";
import {StorageService} from "../shared/storage.service";

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/todo-list-component.html',
    styleUrls: ['app/todo/todo-list.component.css'],
    pipes: [TodoFilterPipe]
})
export class TodoListComponent
implements OnInit{
    pageTitle: string = 'Todo List';
    listFilter: string = null;
    todoList: ITodo[];
    errorMessage: string;
    newTodo: string;
    constructor(private _todoService: TodoService,
                private _storageService: StorageService){}

    ngOnInit(){
        this._todoService.getTodoList()
            .subscribe(
                todo => this.todoList = todo,
                error => this.errorMessage = error
            );
    }

    addTodo(): void{
        let todo: ITodo = {text: this.newTodo, checked: false};
        this.todoList.push(todo);
        this.newTodo= '';
    }

    saveList(): void{
        this._storageService.save("todoList",this.todoList);
    }

    loadList(): void{
        this.todoList = this._storageService.load("todoList");
    }
}
