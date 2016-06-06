import {Injectable} from "angular2/core";
import {Http, Response} from "angular2/http";

import {ITodo} from "./todo";
import {Observable} from "rxjs/Rx";

@Injectable()
export class TodoService{
    private todoUrl = "api/todo/todo.json"
    
    constructor(private _http: Http){}

    getTodoList() : Observable<ITodo[]>{
        return this._http.get(this.todoUrl)
            .map((response: Response) => <ITodo[]>response.json())
            .catch(this.handleError)
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}
