import {Component} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx'

import {TodoListComponent} from "./todo/todo-list.component";
import {TodoService} from "./todo/todo.service";
import {StorageService} from "./shared/storage.service";

@Component({
    selector: 'todo-app',
    templateUrl: "app/app.component.html",
    directives: [TodoListComponent],
    providers: [TodoService,
                HTTP_PROVIDERS,
                StorageService]
})
export class AppComponent{
    pageTitle: string = "Shopping App";
}
