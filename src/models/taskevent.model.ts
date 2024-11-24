import { Task } from "./task.model";

export class TaskEvent {
    action : string;
    task : Task;


    constructor (action : string, task : Task){
        this.action = action;
        this.task = task;
    }

}