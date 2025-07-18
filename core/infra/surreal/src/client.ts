import { Surreal } from "surrealdb";

const db = new Surreal();

let isConnected = false;

export async function connectToSurreal() {
    if (isConnected) return db;

    const SURREAL_HOST = "http://localhost:8000/rpc";
    const SURREAL_NAMESPACE = "gand";
    const SURREAL_DATABASE = "gand";
    const SURREAL_USERNAME = "root";
    const SURREAL_PASSWORD = "root";

    await db.connect(SURREAL_HOST, {
        namespace: SURREAL_NAMESPACE,
        database: SURREAL_DATABASE,
        auth: {
            username: SURREAL_USERNAME,
            password: SURREAL_PASSWORD,
        },
    });

    isConnected = true;
    console.log("[Surreal] Conectado");
    return db;
}

export { db };