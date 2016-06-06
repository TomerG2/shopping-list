System.register(["angular2/core", "./todo-filter.pipe", "./todo.service", "../shared/storage.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_filter_pipe_1, todo_service_1, storage_service_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_filter_pipe_1_1) {
                todo_filter_pipe_1 = todo_filter_pipe_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (storage_service_1_1) {
                storage_service_1 = storage_service_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(_todoService, _storageService) {
                    this._todoService = _todoService;
                    this._storageService = _storageService;
                    this.pageTitle = 'Todo List';
                    this.listFilter = null;
                }
                TodoListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._todoService.getTodoList()
                        .subscribe(function (todo) { return _this.todoList = todo; }, function (error) { return _this.errorMessage = error; });
                };
                TodoListComponent.prototype.addTodo = function () {
                    var todo = { text: this.newTodo, checked: false };
                    this.todoList.push(todo);
                    this.newTodo = '';
                };
                TodoListComponent.prototype.saveList = function () {
                    this._storageService.save("todoList", this.todoList);
                };
                TodoListComponent.prototype.loadList = function () {
                    this.todoList = this._storageService.load("todoList");
                };
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: 'app/todo/todo-list-component.html',
                        styleUrls: ['app/todo/todo-list.component.css'],
                        pipes: [todo_filter_pipe_1.TodoFilterPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, storage_service_1.StorageService])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map