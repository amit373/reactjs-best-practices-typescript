/* eslint-disable no-param-reassign */
export const addDaysToDate = (date: string | Date, n: number): string => {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + n);
  return currentDate.toISOString().split("T")[0];
};

export const addMinutesToDate = (date: string | Date, n: number): string => {
  const currentDate = new Date(date);
  currentDate.setTime(currentDate.getTime() + n * 60000);
  return currentDate.toISOString().split(".")[0].replace("T", " ");
};

export const addWeekDays = (startDate: string | Date, count: number) =>
  Array.from({ length: count }).reduce((date: any) => {
    date = new Date(date.setDate(date.getDate() + 1));
    if (date.getDay() % 6 === 0)
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)));
    return date;
  }, startDate);

export const dayName = (date: string, locale: string): string =>
  new Date(date).toLocaleDateString(locale, { weekday: "long" });

export const getDaysDiffBetweenDates = (
  dateInitial: string,
  dateFinal: string
): number => {
  const initialDate = new Date(dateInitial) as any;
  const finalDate = new Date(dateFinal) as any;
  return (finalDate - initialDate) / (1000 * 3600 * 24);
};

export const getHoursDiffBetweenDates = (
  dateInitial: string,
  dateFinal: string
): number => {
  const initialDate = new Date(dateInitial) as any;
  const finalDate = new Date(dateFinal) as any;
  return (finalDate - initialDate) / (1000 * 3600);
};

export const getMinutesDiffBetweenDates = (
  dateInitial: string,
  dateFinal: string
): number => {
  const initialDate = new Date(dateInitial) as any;
  const finalDate = new Date(dateFinal) as any;
  return (finalDate - initialDate) / (1000 * 60);
};

export const getMonthsDiffBetweenDates = (
  dateInitial: string,
  dateFinal: string
): number =>
  Math.max(
    (new Date(dateFinal).getFullYear() - new Date(dateInitial).getFullYear()) *
      12 +
      new Date(dateFinal).getMonth() -
      new Date(dateInitial).getMonth(),
    0
  );

export const getTimestamp = (date = new Date()): number =>
  Math.floor(date.getTime() / 1000);

export const isSameDate = (dateA: string, dateB: string): boolean =>
  new Date(dateA).toISOString() === new Date(dateB).toISOString();

export const maxDate = (...dates: any[]): Date => new Date(Math.max(...dates));

export const minDate = (...dates: any[]): Date => new Date(Math.min(...dates));
