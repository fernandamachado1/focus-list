import { ITask, TaskList } from "domain/entities/Task";
import { ITaskRepository } from "../../infra/repositories/TaskRepositorySurreal";
import { Result } from "@focus-list/infra";

export interface ICreateTask extends ITask { }

export class CreateTaskUseCase {
    private taskRepo: ITaskRepository;

    constructor(taskRepo: ITaskRepository) {
        this.taskRepo = taskRepo;
    }

    public async execute(
        params: ICreateTask
    ): Promise<Result<TaskList, string>> {
        try {
            const newTask = TaskList.make({
                ...params,
                createdAt: new Date(),
                updatedAt: new Date(),
            });

            const taskCreated = await this.taskRepo.create(newTask);

            return taskCreated;
        } catch (err: any) {
            return { ok: false, error: err.message || "Erro ao criar task" };
        }
    }
}
