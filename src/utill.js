import dayjs from "dayjs";
const DAYS_IN_WEEK = 7;
export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(year, month, 1)).day();
    let currentMonthCount = 0 - firstDayOfMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(DAYS_IN_WEEK).fill().map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    })
    return daysMatrix;
}