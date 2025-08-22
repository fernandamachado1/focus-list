
export type Result<T, E = string> =
  | { ok: true; value: T }
  | { ok: false; error: E };


export interface ISurrealClient<T, E, F = {}> {
  create(entity: T): Promise<Result<T, E>>;
  update(entity: T): Promise<Result<T, E>>;
  delete(id: string): Promise<Result<void, E>>;
  find_by_id(id: string): Promise<Result<T | null, E>>;
  find(params: F): Promise<Result<T[], E>>;
}
