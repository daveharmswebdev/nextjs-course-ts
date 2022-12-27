import classes from './event-item.module.css';
import Button from '../ui/button-link';
import { DateIcon } from '../icons/date-icon';
import { AddressIcon } from '../icons/address-icon';
import { ArrowRightIcon } from '../icons/arrow-right-icon';
import { IEvent } from '../../models/IEvent';
import React from 'react';

type Props = {
  event: IEvent
}

const EventItem: React.FC<Props> = ({ event: {date, location, title, id, image } }) => {
  const humanReadableDate = date ? new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }) : '';

  const address = location.replace(', ', '\n');
  const exploreLink = `events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="event image" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            {DateIcon}
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            {AddressIcon}
            <address>{address}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={exploreLink}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            {ArrowRightIcon}
          </span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
