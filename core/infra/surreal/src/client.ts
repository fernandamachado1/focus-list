// packages/core/infra/surreal.ts

const SURREAL_URL = "http://localhost:8000/sql";
const USER = "root";
const PASS = "root";
const AUTH = "Basic " + btoa(`${USER}:${PASS}`);

export async function surrealQuery(query: string) {
  const response = await fetch(SURREAL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/surrealql", 
      "NS": "gand",
      "DB": "gand",
      "Authorization": AUTH,
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
