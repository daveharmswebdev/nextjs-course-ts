import EventItem from './event-item';
import classes from './event-list.module.css';
import React from 'react';
import { IEvent } from '../../models/IEvent';

type Props = {
  events: IEvent[]
}

const EventList: React.FC<Props> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
