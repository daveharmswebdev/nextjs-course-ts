import { DateIcon } from '../icons/date-icon';
import LogisticsItem from './logistics-item';
import classes from './event-logistics.module.css';
import React from 'react';
import { AddressIcon } from '../icons/address-icon';

type Props = {
  date: string,
  address: string,
  image: string,
  imageAlt: string
}

const EventLogistics: React.FC<Props> = ({ address, date, image, imageAlt }) => {

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
