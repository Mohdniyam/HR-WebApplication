import React from 'react';
import {motion} from 'framer-motion';

import classes from './Button.module.css';

const Button = (props) => {
  
  return (
    <motion.button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      animate={{scale: 0.9}}
      
      
    >
    
      {props.children}
    </motion.button>
  );
};

export default Button;
