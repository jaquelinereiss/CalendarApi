import { Router } from "express";
import { getCurrentWeek } from "../utils/dateHelpers";

const router = Router();

router.get("/currentWeek", (req, rest) => {
    const weekData = getCurrentWeek();
    rest.json(weekData);
});

export default router;