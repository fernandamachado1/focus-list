import { ISurrealClient, Result } from "./SurrealClient";

const SURREAL_URL = "http://localhost:8000/sql";
const AUTH = "Basic " + btoa("root:root");

async function surrealQuery(query: string) {
  const response = await fetch(SURREAL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
      "Surreal-NS": "gand",
      "Surreal-DB": "gand",
      "Authorization": AUTH,
      "Accept": "application/json",
    },
    body: query,
  });

  const result = await response.json();

  if (!response.ok || result[0]?.status !== "OK") {
    return { ok: false, error: result[0]?.detail || "Erro na consulta SurrealDB" } as Result<never>;
  }

  return { ok: true, value: result[0].result } as Result<any>;
}

export function connectToSurreal<T>(): ISurrealClient<T, string> {
  return {
    //@ts-ignore
    create: (entity: T) => surrealQuery(`CREATE ${entity.name} CONTENT ${JSON.stringify(entity)};`),
    update: (entity: T & { id: string; }) => surrealQuery(`UPDATE ${entity.constructor.name}:${entity.id} CONTENT ${JSON.stringify(entity)};`),

    find: ({ table, filter }: { table: string; filter?: string; }) => surrealQuery(`SELECT * FROM ${table}${filter ? ` WHERE ${filter}` : ""};`),

    delete: function (id: string): Promise<Result<void, string>> {
      throw new Error("Function not implemented.");
    },
    find_by_id: function (id: string): Promise<Result<T | null, string>> {
      throw new Error("Function not implemented.");
    },

  };
}
