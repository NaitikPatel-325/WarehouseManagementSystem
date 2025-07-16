import express from "express";
import { create_location_routes } from "../controller/warehousecontroller.js";

const routes = express.Router();

routes.post('/create_location',create_location_routes);

export default routes;