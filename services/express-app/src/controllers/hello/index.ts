import type { TExample } from "@eiei/types";
import type { RequestHandler } from "express";

export const helloWorld: RequestHandler = (_req, res, _next) => {
	const example: TExample = 0;
	res.json({ hello: "world" + example });
};
