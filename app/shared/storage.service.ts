import {Injectable} from "angular2/core";

@Injectable()
export class StorageService{
    save(key: string, obj: any): void{
        if(obj && obj.length){
            var objStr = JSON.stringify(obj);
            window.localStorage.setItem(key,objStr);
        }
    }

    load(key: string): any{
        var objStr = window.localStorage.getItem(key);
        if(objStr !== undefined && objStr !== ''){
            return JSON.parse(objStr);
        };
    }
}
