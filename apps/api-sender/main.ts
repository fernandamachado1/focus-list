import { serve } from "https://deno.land/std@0.195.0/http/server.ts";
import { connectToSurreal } from "@infra/index.ts";
const db = await connectToSurreal();

console.log("🚀 API rodando...");

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  console.log(`${req.method}: ${url.pathname}`);

  const headers = new Headers({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "*",
  });

  if (req.method === "OPTIONS") {
    return new Response(null, { headers, status: 200 });
  }

  if (url.pathname === "/create" && req.method === "POST") {
    const body = await req.json();

    const created = await db.create("task", {
      title: body.title,
      done: body.done ?? false,
    });

    return new Response(JSON.stringify(created), {
      headers: { ...headers, "Content-Type": "application/json" },
      status: 201,
    });
  }

  return new Response("Not Found", { headers, status: 404 });
}

serve(handler, {
  port: Deno.env.get("PORT") ? parseInt(Deno.env.get("PORT")!) : 8091,
});
