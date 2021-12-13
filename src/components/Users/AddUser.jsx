import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");
  const [error, setError] = useState();

  const addNameHandler = (e) => {
    setAddName(e.target.value);
  };
  const addAgeHandler = (e) => {
    setAddAge(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (addName.trim().length === 0 || addAge.trim().length === 0) {
      setError({
        title: "Invalid Name or Age",
        message:
          "Name or Age cannot be empty.Please enter a valid name and age.",
      });
      return;
    }
    if (addAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be greater than 0",
      });
      return;
    }
    props.onAddUser(addName, addAge);
    setAddName("");
    setAddAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="name"
            value={addName}
            onChange={addNameHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            type="text"
            name="age"
            value={addAge}
            onChange={addAgeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
