import express, { Express } from "express";
import { ChattyServer } from "./setupServer";
import DatabaseConnection from "./setupDatabase";
class Application {
  
  public initialize(): void {
      DatabaseConnection();
    const app: Express = express();
    const server: ChattyServer = new ChattyServer(app);
    server.start();
  }
}
const application: Application = new Application();
application.initialize();
