import express from "express";
import cors from "cors";
import calendarRoutes from "./routes/calendar";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/calendar", calendarRoutes);

app.listen(PORT, () => {
    console.log(`CalendarAPI rodando em http://localhost:${PORT}`);
})