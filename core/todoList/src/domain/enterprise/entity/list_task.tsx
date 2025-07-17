import { Entity, IEntity } from "./entity.tsx";

export interface IListTask extends IEntity {
    title: string;
    category: string;
    status_list: "pending" | "in-progress" | "completed";
    dueDate: Date;
    description: string;
    ListTask_list_id: string;
}

export class ListTask extends Entity implements IListTask {
    title: string;
    category: string;
    status_list: "pending" | "in-progress" | "completed";
    dueDate: Date;
    description: string;
    ListTask_list_id: string;

    constructor(props: IListTask) {
        super(props);
        this.title = props.title;
        this.category = props.category;
        this.status_list = props.status_list;
        this.dueDate = props.dueDate;
        this.description = props.description;
        this.ListTask_list_id = props.ListTask_list_id;
    }
    static make(props: IListTask): ListTask {
        if (typeof props.created == "string") {
            props.created = new Date(props.created);
        }

        if (typeof props.updated == "string") {
            props.updated = new Date(props.updated);
        }
        return new ListTask(props);
    }

}