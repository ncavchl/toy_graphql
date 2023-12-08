// nodemon.json - 노드몬이 실행될 때 어떤 걸 변경 감지사항 삼아야할지, 말아야 할지 + 환경 정보 세팅
import express from "express";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers/index.js";
import schema from "./schema/index.js";
import db from "./dbController.js";

const readDB = () => {
  db.read();
  db.data = db.data || { messages: [], users: [] };
  return db.data();
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models: readDB(),
  },
});

const app = express();
await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
    credentials: true,
  },
});

await app.listen({ port: 8000 });
console.log("server listening on 8000...");
