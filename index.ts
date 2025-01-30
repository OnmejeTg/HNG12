import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());

interface ApiResponse {
  email: string;
  current_datetime: string;
  github_repo_url: string;
}

app.get("/hng", (req: Request, res: Response) => {
  const response: ApiResponse = {
    email: "tonmeje@gmail.com",
    current_datetime: new Date().toISOString(),
    github_repo_url: "https://github.com/OnmejeTg/HNG",
  };
  res.json(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
