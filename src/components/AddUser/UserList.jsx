import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.card}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default UserList;
