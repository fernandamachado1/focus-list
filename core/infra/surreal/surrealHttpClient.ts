// core/infra/surreal/src/client.ts - Versão corrigida para Deno

const SURREAL_URL = "http://localhost:8000/sql";
const USER = "root";
const PASS = "root";
const AUTH = "Basic " + btoa(`${USER}:${PASS}`);

export interface SurrealClient {
  query: (query: string) => Promise<any>;
  create: (table: string, data: any) => Promise<any>;
  select: (table: string) => Promise<any>;
  update: (table: string, id: string, data: any) => Promise<any>;
  delete: (table: string, id: string) => Promise<any>;
}

export async function surrealQuery(query: string) {
  const response = await fetch("http://localhost:8000/sql", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain", // <- correto
      "Surreal-NS": "gand", // <- correto
      "Surreal-DB": "gand", // <- correto
      "Authorization": "Basic " + btoa("root:root"),
      "Accept": "application/json"
    },
    body: query,
  });

  const result = await response.json();

  if (!response.ok || result[0]?.status !== "OK") {
    console.error("Erro ao executar query:", result);
    throw new Error(result[0]?.detail || "Erro na consulta SurrealDB");
  }

  return result[0].result;
}

export function connectToSurreal(): SurrealClient {
  return {
    async query(query: string) {
      return await surrealQuery(query);
    },

    async create(table: string, data: any) {
      const query = `CREATE ${table} CONTENT ${JSON.stringify(data)};`;
      return await surrealQuery(query);
    },

    async select(table: string) {
      const query = `SELECT * FROM ${table};`;
      return await surrealQuery(query);
    },

    async update(table: string, id: string, data: any) {
      const query = `UPDATE ${table}:${id} CONTENT ${JSON.stringify(data)};`;
      return await surrealQuery(query);
    },

    async delete(table: string, id: string) {
      const query = `DELETE ${table}:${id};`;
      return await surrealQuery(query);
    },
  };
}
