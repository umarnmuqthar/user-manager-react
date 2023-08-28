import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Data",
        message: "Please add a username and an age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be greater than 0.",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.card}>
        <form onSubmit={submitHandler} className={classes["user-input"]}>
          <div className={classes["user-input__div"]}>
            <label htmlFor="username ">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={usernameHandler}
              value={enteredUsername}
            />
          </div>
          <div className={classes["user-input__div"]}>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              onChange={ageHandler}
              value={enteredAge}
            />
          </div>
          <div className={classes.button}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
