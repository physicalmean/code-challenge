import { Router, Response, Request } from "express";
import Database from "../databases";
import { validateResourceRequest } from "../middleware";

const router = Router();
const db = Database.getInstance();

router.post("/", validateResourceRequest, (req: Request, res: Response) => {
  const resource = db.create(req.body);
  res.send(resource);
});

router.get("/", (req: Request, res: Response) => {
  const resources = db.list();
  res.send(resources);
});

router.get("/:id", (req: Request, res: Response) => {
  const resource = db.get(req.params.id);
  if (resource) {
    res.send(resource);
  } else {
    res.status(404).send({ message: "Resource not found" });
  }
});

router.put("/:id", validateResourceRequest, (req: Request, res: Response) => {
  const resource = db.update(req.params.id, req.body);
  if (resource) {
    res.send(resource);
  } else {
    res.status(404).send("Resource not found");
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  const success = db.delete(req.params.id);
  if (success) {
    res.send({ message: "Resource deleted" });
  } else {
    res.status(404).send({ message: "Resource not found" });
  }
});

export default router;
