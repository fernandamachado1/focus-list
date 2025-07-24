// apps/api-sender/handlers/task.ts

import { SurrealClient } from "@infra/index.ts";


export interface Task {
  id?: string;
  title: string;
  done: boolean;
  created_at?: string;
  updated_at?: string;
}

export class TaskHandler {
  constructor(private db: SurrealClient) {}

  async createTask(data: Omit<Task, 'id' | 'created_at' | 'updated_at'>): Promise<Task> {
    try {
      const taskData = {
        ...data,
        done: data.done ?? false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const result = await this.db.create("task", taskData);
      return Array.isArray(result) ? result[0] : result;
    } catch (error) {
      console.error("Erro ao criar task:", error);
      throw new Error("Falha ao criar task");
    }
  }

  async getTasks(): Promise<Task[]> {
    try {
      const result = await this.db.select("task");
      return Array.isArray(result) ? result : [result];
    } catch (error) {
      console.error("Erro ao buscar tasks:", error);
      throw new Error("Falha ao buscar tasks");
    }
  }

  async updateTask(id: string, data: Partial<Task>): Promise<Task> {
    try {
      const updateData = {
        ...data,
        updated_at: new Date().toISOString(),
      };

      const result = await this.db.update("task", id, updateData);
      return Array.isArray(result) ? result[0] : result;
    } catch (error) {
      console.error("Erro ao atualizar task:", error);
      throw new Error("Falha ao atualizar task");
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await this.db.delete("task", id);
    } catch (error) {
      console.error("Erro ao deletar task:", error);
      throw new Error("Falha ao deletar task");
    }
  }

  async toggleTask(id: string): Promise<Task> {
    try {
      // Primeiro busca a task atual
      const currentTask = await this.db.query(`SELECT * FROM task:${id};`);
      if (!currentTask || currentTask.length === 0) {
        throw new Error("Task não encontrada");
      }

      const task = currentTask[0];
      return await this.updateTask(id, { done: !task.done });
    } catch (error) {
      console.error("Erro ao alternar status da task:", error);
      throw new Error("Falha ao alternar status da task");
    }
  }
}