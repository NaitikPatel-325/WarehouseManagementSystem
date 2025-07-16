import express from "express";
import { create_product } from "../controller/productcontroller.js";

const routes = express.Router();

routes.post("/create_product",create_product)

export default routes;