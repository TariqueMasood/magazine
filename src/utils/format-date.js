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

export  function formatDate2(dateString) {
  const currentDate = new Date(dateString);
  const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });
  const formattedDate = dateTimeFormatter.format(currentDate);
  return formattedDate;
}
