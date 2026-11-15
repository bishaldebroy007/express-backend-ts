import express, { type Application, type Request, type Response } from "express";

const app: Application = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
