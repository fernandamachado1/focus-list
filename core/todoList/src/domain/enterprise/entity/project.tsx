import { IEntity, Entity } from "./entity.tsx";

interface ITaskList extends IEntity {
    name: string
}

export class TaskList extends Entity implements ITaskList {
    name: string

    constructor(props: ITaskList) {
        super(props);
        this.name = props.name;
    }
}