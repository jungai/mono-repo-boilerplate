import express from "express";
import type { Express } from "express";
import cors from "cors";
import { router } from "./routes";

export function addCors(e: Express): Express {
	return e.use(cors());
}

export function addJsonParser(e: Express): Express {
	return e.use(express.json()).use(express.urlencoded({ extended: true }));
}

export function addRoutes(e: Express): Express {
	return e.use(router);
}

export const app = [addCors, addJsonParser, addRoutes].reduce(
	(ap, middleware) => middleware(ap),
	express()
);
