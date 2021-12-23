import React from "react";
import {
  counterIncrement,
  counterDecrement,
} from "../Redux/Actions/counterActions";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function Counter() {
  const Dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <Button
        variant="success"
        className="mx-2"
        onClick={() => Dispatch(counterIncrement())}
      >
        +
      </Button>
      <span> {counter} </span>
      <Button
        variant="secondary"
        className="mx-2"
        onClick={() => Dispatch(counterDecrement())}
      >
        -
      </Button>
    </div>
  );
}
