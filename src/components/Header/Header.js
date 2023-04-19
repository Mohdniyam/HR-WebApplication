import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Card className={classes.h1}>
      <h1>HBoard</h1>
      <input className={classes.input}></input>
    </Card>
  );
};

export default Header;
