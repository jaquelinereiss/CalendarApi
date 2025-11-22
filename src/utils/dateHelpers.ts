export function getCurrentWeek() {
  const today = new Date();
  const firstDayOfWeek = new Date(today);
  firstDayOfWeek.setDate(today.getDate() - today.getDay());
  const days = [];
  const dayOfWeek = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate()- dayOfWeek)

  for (let i = 0; i < 7; i++) {
    const day = new Date(firstDayOfWeek);
    day.setDate(firstDayOfWeek.getDate() + i);

    const dayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
    const dayName = dayNames[day.getDay()];
    const dayNumber = day.getDate();

    days.push(`${dayName} ${dayNumber}`);
  }

  const monthName = today.toLocaleString("pt-BR", { month: "long", year: "numeric" });

  return {
    month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
    days,
    todayIndex: dayOfWeek
  };
}
