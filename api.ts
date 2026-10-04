import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your existing index.html from the same project folder
app.use(express.static(path.join(__dirname)));

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "NovaStudio API is running",
    time: new Date().toISOString()
  });
});

app.post("/api/contact", (req: Request, res: Response) => {
  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required."
    });
  }

  console.log("New contact request:");
  console.log({
    name,
    email,
    message
  });

  return res.status(201).json({
    success: true,
    message: "Thank you! Your message has been received."
  });
});

app.get("*", (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`NovaStudio is running at http://localhost:${PORT}`);
});
