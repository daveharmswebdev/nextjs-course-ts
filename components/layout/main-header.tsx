import Link from 'next/link';
import classes from './main-header.module.css';
import React from 'react';

type Props = {}

const MainHeader: React.FC<Props> = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Nextjs Events</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
