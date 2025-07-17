// test.ts

import { surrealQuery } from "./core/infra/index.tsx";


const result = await surrealQuery(
  "CREATE task SET title = 'Aprender Deno', completed = false;"
);

console.log("Tarefa criada:", result);
