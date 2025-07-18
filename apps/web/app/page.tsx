"use client";

import { FormTodo, List } from "@focus-list/todo-list";

export default function Home() {
  return (
   <FormTodo onAdd={function (task: string, category: string, dueDate: string): void {
      throw new Error("Function not implemented.");
    } }/>
  );
}
