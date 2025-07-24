import { connectToSurreal } from "@infra/index.ts";

const client = connectToSurreal();

const run = async () => {
  try {
    // Teste simples de criação
    const created = await client.create("task", {
      title: "Tarefa de teste",
      done: false,
    });
    console.log("Criado:", created);

    // Buscar tudo da tabela
    const allTasks = await client.select("task");
    console.log("Selecionado:", allTasks);

    // Atualizar a primeira task (se existir)
    if (allTasks.length > 0) {
      const id = allTasks[0].id.split(":")[1]; // pega apenas o ID sem o prefixo
      const updated = await client.update("task", id, {
        title: "Tarefa atualizada",
        done: true,
      });
      console.log("Atualizado:", updated);
    }

    // Deletar a primeira task (opcional)
    // await client.delete("task", id);
  } catch (err) {
    console.error("Erro no teste:", err);
  }
};

run();
