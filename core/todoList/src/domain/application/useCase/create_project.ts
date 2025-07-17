import { Project, IProject } from "../../enterprise/entity/project.tsx";
import { IProjectRepository } from "../repository/project.ts";


export interface ICreateProject extends IProject {}

export interface ICreateProjectResult {
    company: Project;
}

export class CreateProject {
    private companyRepo: IProjectRepository;

    constructor(companyRepo: IProjectRepository) {
        this.companyRepo = companyRepo;    }

    public async execute(
        params: ICreateProject,
    ): Promise<Result<ICreateProjectResult, Error>> {
        try {
            const { ...companyParams } = params;

            const newProject = Project.make(companyParams);

            const companyCreated = await this.companyRepo.create(newProject);

            if (companyCreated.isError()) {
                return Result.error({ message: "error in create company use case" });
            }
            const company = companyCreated.getOk();

            await this.makeLog({
                ...log,
                description: `Empresa ${company.name} criada`,
                module: "Cadastros",
                source_id: company.id!,
                source_origin: "Empresas",
                type: "CREATE",
                after: company
            });

            return Result.ok({
                company
            });
        } catch (error) {
            return Result.error({ message: "error" });
        }
    }
}
