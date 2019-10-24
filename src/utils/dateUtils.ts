export const millisecondsInADay = 86400000;

export const getAbsoluteDay = (inputDate: Date) => {
  let date = new Date(inputDate);
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(0);
  return date;
};

export const getToday = () => {
  return getAbsoluteDay(new Date());
};

export const getDaysAgo = (daysNum: number) => {
  return new Date(+getToday() - daysNum * millisecondsInADay);
};

export const getDaysLater = (daysNum: number) => {
  return new Date(+getToday() + daysNum * millisecondsInADay);
};

export const areSameDay = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear === date2.getFullYear &&
    date1.getMonth === date2.getMonth &&
    date1.getDay === date2.getDay
  );
};

export function* generateDays(
  from: Date
): Generator<Date, void, 'forward' | 'backward'> {
  const date = getAbsoluteDay(from);
  let low = date;
  let high = date;
  let value = date;
  while (true) {
    let direction = yield new Date(value);
    if (direction === 'backward') {
      low = new Date(+low - millisecondsInADay);
      value = low;
    } else if (direction === 'forward') {
      high = new Date(+high + millisecondsInADay);
      value = high;
    }
  }
}
