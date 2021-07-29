import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log ("Button Running");
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);

// React memo compares props.show === props.previous.show -- does so with a regular comparsion operator.
//holds true in string, numeric
//does not hold true when comparing arrays, objects, functions

// props.show === props.previous.show

// props.onClick = props.previous.onClick