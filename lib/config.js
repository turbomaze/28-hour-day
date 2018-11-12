function formatHour(hour) {
  const hourString = hour.toString();
  const formatted = hourString.length === 1 ? '0' + hourString : hourString;
  return `${formatted}:00`;
}

module.exports = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysPerWeek: 7,
  hoursPerNormalDay: 24,
  hoursPerDay: 28,
  formatHour,
  workWeekStartsAt: 2,
  workWeekEndsAt: 6,
  workStartsAt: 9,
  workEndsAt: 17,
};
