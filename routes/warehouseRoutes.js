import express from "express";
import { create_location_routes,getwarehouseintree } from "../controller/warehousecontroller.js";

const routes = express.Router();

routes.post('/create_location',create_location_routes);
routes.get('/warehouse/tree/',getwarehouseintree);

export default routes;