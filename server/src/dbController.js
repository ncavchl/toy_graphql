import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const adapter = new JSONFileSync("./src/db.json");

const defaultData = { messages: [], users: [] };

const db = new LowSync(adapter, defaultData);

export default db;
