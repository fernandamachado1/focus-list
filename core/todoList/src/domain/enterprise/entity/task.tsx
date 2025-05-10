import { IEntity, Entity } from "./entity.tsx";

export interface ITask extends IEntity {
    title: string;
    category: string;
    status_task: "pending" | "in-progress" | "completed";
    dueDate: Date;
    description: string;
    task_list_id: string;
}

export class Task extends Entity implements ITask {
    title: string;
    category: string;
    status_task: "pending" | "in-progress" | "completed";
    dueDate: Date;
    description: string;
    task_list_id: string;

    constructor(props: ITask) {
        super(props);
        this.title = props.title;
        this.category = props.category;
        this.status_task = props.status_task;
        this.dueDate = props.dueDate;
        this.description = props.description;
        this.task_list_id = props.task_list_id;
    }
}