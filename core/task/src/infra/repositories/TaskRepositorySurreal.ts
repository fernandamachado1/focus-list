import { connectToSurreal, ISurrealClient, Result, } from "@focus-list/infra";
import { TaskList } from "domain/entities/Task";

export interface ITaskRepository extends ISurrealClient<TaskList, string> { }

export class TaskRepository implements ITaskRepository {
    private db: ISurrealClient<TaskList, string>;
    constructor() {
        this.db = connectToSurreal<TaskList>();
    }

    async create(entity: TaskList): Promise<Result<TaskList, string>> {
        try {
            //@ts-ignore
            const [task] = await this.db.create<TaskList>("task", { ...entity });
            return { ok: true, value: TaskList.make(task) };
        } catch (err: any) {
            return { ok: false, error: err.message || "Erro ao criar task" };
        }
    }
    update(entity: TaskList): Promise<Result<TaskList, string>> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<Result<void, string>> {
        throw new Error("Method not implemented.");
    }
    find_by_id(id: string): Promise<Result<TaskList | null, string>> {
        throw new Error("Method not implemented.");
    }
    find(params: {}): Promise<Result<TaskList[], string>> {
        throw new Error("Method not implemented.");
    }

}