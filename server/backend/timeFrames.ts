const chalk = require("chalk");
const success = (...args: any[]) => chalk.rgb(255, 255, 255).bgRgb(32, 128, 0)(...args);
const stage = (...args: any[]) => chalk.bold.bgRgb(0, 0, 255).inverse(...args);
const impText = (...args: any[]) => chalk.keyword("orange").inverse(...args);
const links = (...args: any[]) => chalk.bold.blue(...args);
const signs = (...args: any[]) => chalk.rgb(32, 128, 0).bold(...args);
const error = (...args: any[]) => chalk.rgb(255, 255, 255).bgRgb(128, 0, 0)(...args);
const subject = (...args: any[]) => chalk.bold.magenta.bold(...args);

import {format, getDate, isWithinInterval } from "date-fns";

export const OneHour: number = 1000 * 60 * 60;
export const OneDay: number = OneHour * 24;
export const OneWeek: number = OneDay * 7;
export const changeDateFormat = (date: Date): string => {
  var displayDate =
  format(new Date(date), 'dd/MM/yyyy')
  return displayDate;
};

export const weekDays = (date: number): {}[] => {
  let startDate = date;
  let dateObj: { date: string; count: number }[] = [];
  for (let i = 0; i < 7; i++) {
    let newDate: string = changeDateFormat(new Date(startDate + OneDay * i));
    dateObj.push({ date: newDate, count: 0 });
  }

  return dateObj;
};

export const seperateWeeks = (dayZero: number): {}[] => {
  let weeks: {weekNum: number, startDate: string, endDate:string}[] = [];
  let today = Date.now()
  let startDate = dayZero;
  
  let endDate = startDate + OneWeek;

  for (let weekNum=1; Number(startDate) < Number(today); weekNum++) {
    let endHours = new Date(endDate).getHours()
    endDate = endHours != 0 ? new Date(endDate + OneDay).setHours(0,0,0) : endDate


    let formattedStartDate = format(new Date(startDate), 'MM/dd/yyyy')
    let formattedEndDate = format(new Date(endDate), 'MM/dd/yyyy')

    let week = {weekNum, startDate:formattedStartDate, endDate:formattedEndDate}

    weeks.push(week)
    startDate = endDate
    endDate += OneWeek 
    
    endDate = endDate > today ? today : endDate
  }
  return weeks;
  //This Return {}[] every Week has start and End
  //return [{startDate: date, endDate:date},{startDate: date, endDate:date},{startDate: date, endDate:date}]
};
