export const OneHour: number = 1000 * 60 * 60;
export const OneDay: number = OneHour * 24;
export const OneWeek: number = OneDay * 7;
export const changeDateFormat = (date: Date): string => {
    const chalk = require("chalk");
    const stage = (...args: any[]) => chalk.bold.bgRgb(0, 0, 255).inverse(...args);
    const success = (...args: any[]) => chalk.rgb(255, 255, 255).bgRgb(32, 128, 0)(...args);
    console.log(stage("Initial Date"), success(date))


    var displayDate =
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    +date.getFullYear();
    
    console.log(stage("end Date"), success(displayDate))
  return displayDate;
};

export const weekDays = (date: number): {}[] => {
    let startDate = date
  let dateObj: { date: string; count: number }[] = [];
  for (let i = 0; i < 7; i++) {
    let newDate: string = changeDateFormat(new Date(startDate + OneDay * i));
    dateObj.push({ date: newDate, count: 0 });
  }
  return dateObj;
};
//launch day of the app.
