import {PipeTransform, Pipe} from "angular2/core";
import {ITodo} from "./todo";

@Pipe({
    name: "todoFilter"
})
export class TodoFilterPipe
implements PipeTransform{
    transform(value: ITodo[], args: string[]): ITodo[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((todo: ITodo) =>
            todo.text.toLocaleLowerCase().indexOf(filter) != -1 ): value;
    }
}
