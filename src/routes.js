import { Router } from "express";

const routes = Router();

routes.get("/interactions", (request, response) =>
  response.json({ message: "Hello World!" })
);

export default routes;
