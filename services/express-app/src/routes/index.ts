import { Router } from "express";
import { helloWorld } from "../controllers/hello";

export function mapRoutes(r: Router): Router {
	r.get("/", helloWorld);

	return r;
}

export const router = mapRoutes(Router());
