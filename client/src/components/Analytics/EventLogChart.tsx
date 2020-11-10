import React, { useState, useEffect } from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Border } from "./styledComponents";
import { ErrorBoundary } from "./ErrorBoundaries";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);





const url = `http://localhost:3001/events/all`;



export type EventLogsProps = {
  // date: string;
  // count: number;
}[];



export const EventLogChart: React.FC = () => {
  const classes = useStyles()
  const [data, setData] = useState<EventLogsProps>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  return (
    <Border borderColor="red">
      <ErrorBoundary>
        <h1>All Events Accordion</h1>
        <Accordion>
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        </Accordion>
      </ErrorBoundary>
    </Border>
  );
};
