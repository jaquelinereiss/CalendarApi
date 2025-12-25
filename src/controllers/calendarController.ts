import { Request, Response } from "express";
import { generateMonthCalendar } from "../utils/dateHelpers";

export const getCalendarByMonth = async (req: Request, res: Response) => {
  try {
    const year = Number(req.params.year);
    const month = Number(req.params.month);

    if (!year || !month || month < 1 || month > 12) {
      return res.status(400).json({ message: "Ano ou mês inválido" });
    }

    const calendar = generateMonthCalendar(year, month);

    return res.json({
      year,
      month,
      totalDays: calendar.filter(d => d.day !== null).length,
      calendar
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar calendário" });
  }
};
