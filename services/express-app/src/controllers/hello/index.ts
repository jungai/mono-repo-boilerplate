import type { RequestHandler } from "express";

export const helloWorld: RequestHandler = (_req, res, _next) => {
	res.json({ hello: "world" });
};
