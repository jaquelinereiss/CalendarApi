export interface CalendarDay {
  date: string | null; 
  day: number | null;
  dayOfWeek: number;
  isWeekend: boolean;
}

export function getCurrentWeek() {
  const today = new Date();
  const todayIndex = today.getDay();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - todayIndex);
  const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const days: string[] = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(firstDayOfWeek);
    day.setDate(firstDayOfWeek.getDate() + i);

    days.push(`${dayNames[day.getDay()]} ${day.getDate()}`);
  }

  const monthName = today.toLocaleString("pt-BR", {
    month: "long",
    year: "numeric"
  });

  return {
    month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
    days,
    todayIndex
  };
}

export function generateMonthCalendar(
  year: number,
  month: number
): CalendarDay[] {
  const calendar: CalendarDay[] = [];
  const firstDayOfMonth = new Date(year, month - 1, 1);
  const firstDayWeek = firstDayOfMonth.getDay();
  const lastDate = new Date(year, month, 0).getDate();
  for (let i = 0; i < firstDayWeek; i++) {
    calendar.push({
      date: null,
      day: null,
      dayOfWeek: i,
      isWeekend: i === 0 || i === 6
    });
  }

  for (let d = 1; d <= lastDate; d++) {
    const dateObj = new Date(year, month - 1, d);
    const dayOfWeek = dateObj.getDay();

    const yyyy = year;
    const mm = String(month).padStart(2, "0");
    const dd = String(d).padStart(2, "0");

    calendar.push({
      date: `${yyyy}-${mm}-${dd}`,
      day: d,
      dayOfWeek,
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6
    });
  }

  return calendar;
}
