import { Surreal } from "surrealdb";

const db = new Surreal();

let isConnected = false;

export async function connectToSurreal() {
    if (isConnected) return db;

    const SURREAL_HOST = "";
    const SURREAL_NAMESPACE = ""
    const SURREAL_DATABASE = ""
    const SURREAL_USERNAME = ""
    const SURREAL_PASSWORD = ""

    await db.connect(SURREAL_HOST, {
        namespace: SURREAL_NAMESPACE,
        database: SURREAL_DATABASE,
        auth: {
            username: SURREAL_USERNAME,
            password: SURREAL_PASSWORD,
        },
        async prepare(connection) {
            const token = getToken();
            if (token) {
                try {
                    await connection.authenticate(token);
                    console.log("deu");
                } catch (e) {
                    console.error("Error", e);}
            }
        },
    });

    isConnected = true;
    console.log("[Surreal] Conectado");
    return db;
}

function getToken(): string | null {
    return null;
}

export { db };
