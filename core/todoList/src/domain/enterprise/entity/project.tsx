import { Entity, IEntity } from "./entity.tsx";

export interface IProject extends IEntity {
    name: string
}

export class Project extends Entity implements IProject {
    name: string

    constructor(props: IProject) {
        super(props);
        this.name = props.name;
    }
     static make(props: IProject): Project {
            if (typeof props.created == "string") {
                props.created = new Date(props.created);
            }
    
            if (typeof props.updated == "string") {
                props.updated = new Date(props.updated);
            }
            return new Project(props);
        }
    
}