///<reference path="types.ts" />

import express from "express";
import { Request, Response } from "express";

const chalk = require("chalk");
const success = (...args: any[]) => chalk.rgb(255, 255, 255).bgRgb(32, 128, 0)(...args);
const stage = (...args: any[]) => chalk.bold.bgRgb(0, 0, 255).inverse(...args);
const impText = (...args: any[]) => chalk.keyword("orange").inverse(...args);
const links = (...args: any[]) => chalk.bold.blue(...args)
const signs =  (...args: any[]) => chalk.rgb(32, 128, 0).bold(...args)
const error = (...args: any[]) => chalk.rgb(255, 255, 255).bgRgb(128, 0, 0)(...args)
const subject = (...args: any[]) => chalk.bold.magenta.bold(...args)


// some useful database functions in here:
import {
  getAllEvents,
  getEventsBy,
  addEvent,
  getByDate
  
} from "./database";
import { browser, Event, weeklyRetentionObject } from "../../client/src/models/event";
import { ensureAuthenticated, validateMiddleware } from "./helpers";

import {
  shortIdValidation,
  searchValidation,
  userFieldsValidator,
  isUserValidator,
} from "./validators";
const router = express.Router();

// Routes

export interface Filter {
  sorting?: string;
  type?: string;
  browser?: string;
  search?: string;
  offset?: number;
}

router.get('/all', (req: Request, res: Response) => {
  res.send(getAllEvents())
  
});


router.get('/all-filtered', (req: Request, res: Response) => {
  console.log('/all-filtered')
  let query = req.query;
  const {browser, type, offset, search, sorting} = query
  // const filter: Filter = query

  
  const filter: Filter = {browser, type, offset: Number(offset)|| 0, search, sorting} 
  let filteredEvents = getEventsBy(filter)
  res.json(filteredEvents)
});


router.get('/by-days/:offset', (req: Request, res: Response) => {
  console.log(links('/by-days/:offset'))
  const {offset} = req.params;
  console.log(subject("offset"), error(offset))
  let filteredEvents = getByDate(Number(offset))

  res.json(filteredEvents)

  // res.send('/by-days/:offset')
});

router.get('/by-hours/:offset', (req: Request, res: Response) => {
  console.log('/by-hours/:offset')
  res.send('/by-hours/:offset')
});

router.get('/today', (req: Request, res: Response) => {
  console.log('/today')
  res.send('/today')
});

router.get('/week', (req: Request, res: Response) => {
  console.log('/week')
  res.send('/week')
});

router.get('/retention', (req: Request, res: Response) => {
  const {dayZero} = req.query
  console.log('/retention')
  res.send('/retention')
});
router.get('/:eventId',(req : Request, res : Response) => {
  console.log('/:eventId')
  res.send('/:eventId')
});

router.post('/', (req: Request, res: Response) => {

  try {
    let event: Event = req.body
    addEvent(event);
    res.json({message: "New Event Added"})
  } catch (err) {
    res.json({error: err.message})
  }
  // let result = addEvent(req)
  // res.send('/')
});

router.get('/chart/os/:time',(req: Request, res: Response) => {
  res.send('/chart/os/:time')
})

  
router.get('/chart/pageview/:time',(req: Request, res: Response) => {
  res.send('/chart/pageview/:time')
})

router.get('/chart/timeonurl/:time',(req: Request, res: Response) => {
  res.send('/chart/timeonurl/:time')
})

router.get('/chart/geolocation/:time',(req: Request, res: Response) => {
  res.send('/chart/geolocation/:time')
})


export default router;
