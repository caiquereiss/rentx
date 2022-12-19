import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ListAvailableController } from "@modules/cars/useCases/listAvailableCars/listAvailableCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableController = new ListAvailableController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle
);
carsRoutes.get("/available", listAvailableController.handle)

export default carsRoutes;
