export enum TaskStatus {
    COMPLETED = "C",
    IN_PROGRESS = "IP",
    PENDING = "P"
}

export enum TaskPriority{
    HIGH = "H",
    MEDIUM = "M",
    LOW = "L"
}

export class Task {
    id:number;
    name:string;
    description:string;
    priority:TaskPriority;
    status:TaskStatus;
    creationDate:Date;
    expirationDate:Date;
    isDelete:boolean;


    constructor (id:number,name:string,description:string,priority:TaskPriority, status:TaskStatus,creationDate:Date,expirationDate:Date,isDelete:boolean){
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.creationDate = creationDate;
        this.expirationDate = expirationDate;
        this.isDelete = isDelete;
    }

    getStatusText():string{
        let text="";
        switch(this.status){
            case "IP": text = "En Proceso";break;
            case "C": text = "Realizada";break;
            case "P": text = "Pendiente";break;
        }
        return text;
    }

    getPriorityText():string{
        let text = "";
        switch(this.priority){
            case "H": text = "Alta";break;
            case "M": text = "Media";break;
            case "L": text = "Baja";break;
        }
        return text;
    }

    getPriorityColor():string{
        switch(this.priority){
            case "H": return "blue";break;
            case "M":return "red";break;
            case "L":return "black";break;
            default: return "";
        }
    }


}