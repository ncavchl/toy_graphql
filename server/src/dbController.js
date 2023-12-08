import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

const adapter = new JSONFileSync("./src/db.json");
const db = new LowSync(adapter);

export default db;
