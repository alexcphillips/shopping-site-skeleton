import express, { Request, Response } from "express";

const app = express();

app.use(express.json());
app.use(() => {
    console.log("ACTIVATED!!!!");
});

app.get("", (_req: Request, res: Response) => {
    console.log("got request!");
    res.send("hello");
});

export default app;
