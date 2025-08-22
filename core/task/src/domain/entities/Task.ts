export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface ITask {
    id: string;
    title: string;
    category?: string;
    status?: TaskStatus;
    dueDate?: Date;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}

export class TaskList implements ITask {
    id: string;
    title: string;
    category?: string | undefined;
    status?: TaskStatus | undefined;
    dueDate?: Date | undefined;
    description?: string | undefined;
    createdAt: Date;
    updatedAt: Date;

    private tasks: ITask[] = [];

    constructor(props: ITask) {
        this.id = props.id;
        this.title = props.title;
        this.category = props.category;
        this.status = props.status;
        this.dueDate = props.dueDate;
        this.description = props.description;
        this.createdAt = props.createdAt;
        this.updatedAt = props.updatedAt;
    }
    
    static make(props: ITask): TaskList {
        return new TaskList(props);
    }
}