export default function formatDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];

  return [monthName, year];
}
