import { Project } from "../../enterprise/entity/project.tsx";
import { Surreal } from "surrealdb";
// interface IRepository<T, E, F = {}> {
//     create(entity: T): Promise<Result<T, E>>;
//     update(entity: T): Promise<Result<T, E>>;
//     delete(id: string): Promise<Result<void, E>>;
//     find_by_id(id: string): Promise<Result<T | null, E>>;
//     find(params: F): Promise<Result<T[], E>>;
// }
export interface IProjectRepository {

}
export class ProjectRepository implements IProjectRepository {
    db: Surreal

    constructor(db: Surreal) {
        this.db = db;
    }
     async create(entity: Project): Promise<Project> {
    const [project] = await this.db.create<Project>("project", entity);
    return Project.make(project); 
  }

}