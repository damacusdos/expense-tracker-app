import React from "react";
import styles from "./card.module.css";

const Card = (props) => {
  const classes = `${styles.card} ${props.className}`;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
