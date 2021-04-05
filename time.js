function initClock() {
  const now = new Date();
  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  document.getElementById(
    'displayTime'
  ).textContent = `${displayTwelveHourClock(
    hours
  )}:${minutes}:${seconds} ${amPm}`;
}

function addZero(number) {
  return number < 10 ? '0' + number : number;
}

function addDateSuffix(number) {
  if (number < 10 || number > 20) {
    switch (number % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
}

function displayTwelveHourClock(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function initDate() {
  const today = new Date();
  const day = days[today.getDay()];
  const monthName = month[today.getMonth()];
  const fullYear = [today.getFullYear()];
  const date = addDateSuffix([today.getDate()]);

  document.getElementById(
    'displayDate'
  ).textContent = `${day}, ${monthName} ${date}, ${fullYear}`;
}

const days = [
  'Sundays',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

initClock();
initDate();

setInterval(() => {
  initClock();
  initDate();
}, 1000);
