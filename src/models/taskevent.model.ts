import { Task } from "./task.model";

export class TaskEvent {
    action : string;
    taskId : number;

    constructor (action : string, taskId : number){
        this.action = action;
        this.taskId = taskId;
    }
}