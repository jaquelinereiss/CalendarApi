import { Router } from "express";
import { getCurrentWeek } from "../utils/dateHelpers";
import { getCalendarByMonth } from "../controllers/calendarController";

const router = Router();

router.get("/currentWeek", (req, res) => {
  const weekData = getCurrentWeek();
  res.json(weekData);
});

router.get("/:year/:month", getCalendarByMonth);

export default router;