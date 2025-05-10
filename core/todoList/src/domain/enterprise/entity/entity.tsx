export interface IEntity {
    id?: string;
    status?: boolean;
    created?: Date;
    updated?: Date;
}

export class Entity implements IEntity {
    id?: string;
    status?: boolean;
    created?: Date;
    updated?: Date;
    [s: string]: any;

    constructor(props: IEntity) {
        const { id = undefined, created = new Date(), status = true, updated = undefined } = props;

        this.id = id ? String(id) : undefined;
        this.status = status;
        this.created = created;
        this.updated = updated;
    }

}