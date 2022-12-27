import classes from './event-summary.module.css';
import React from 'react';

type Props = {
  title: string
}

const EventSummary: React.FC<Props> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
