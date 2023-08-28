import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClick}>
      <Card className={classes.card}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <footer className={classes.footer}>
          <Button className={classes.button} onClick={props.onClick}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
