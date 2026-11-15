import express, { type Application, type Request, type Response } from "express";

const app: Application = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(express.text());

app.get("/", (_req: Request, res: Response) => {
	// res.send("Hello World!");
	res.status(200).json({
		success: true,
		message: "This is root route",
		author: "PH",
	});
});

app.post("/", async (req: Request, res: Response) => {
	console.log(req.body);
});

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
