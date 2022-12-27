import classes from './logistics-item.module.css';
import React from 'react';

type Props = {
  icon: JSX.Element,
  children: React.ReactNode
}

const LogisticsItem: React.FC<Props> = ({ icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        {icon}
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
