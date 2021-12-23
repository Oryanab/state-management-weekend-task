import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { changeUser } from "../Redux/Actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function UserInfo() {
  const Dispatch = useDispatch();
  const equipments = useSelector((state) => state.equipment);
  const user = useSelector((state) => state.user);

  // States:
  const today = new Date().toLocaleDateString();
  const [name, setName] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [date, setDate] = useState(today);

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>User Login:</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Employee Name:</Form.Label>
          <Form.Control
            defaultValue={name}
            size="sm"
            type="text"
            onBlur={(e) => setName(e.target.value)}
          />
          <Form.Label>Employee work place:</Form.Label>
          <Form.Control
            defaultValue={workPlace}
            size="sm"
            type="text"
            onBlur={(e) => setWorkPlace(e.target.value)}
          />
          <Form.Label>Date:</Form.Label>
          <Form.Control
            onChange={(e) => setDate(e.target.value)}
            defaultValue={date}
            type="date"
          />
          <br />
          <Button
            onClick={(e) => Dispatch(changeUser(name, workPlace, date))}
            variant="outline-primary"
          >
            Login System
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
