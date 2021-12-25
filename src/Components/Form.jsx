import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import {
  addNewEquipment,
  updateSingleEquipment,
} from "../Redux/Actions/equipmentActions";
import { useDispatch, useSelector } from "react-redux";

export default function EquipmentForm() {
  const Dispatch = useDispatch();
  const equipments = useSelector((state) => state.equipment);
  const user = useSelector((state) => state.user);

  // States:
  const [equipmentName, setEquipmentName] = useState("");
  const [fullQuantity, setFullQuantity] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(0);

  return (
    <div className="main-form">
      <h2 style={{ textAlign: "left" }}>Equipment List:</h2>
      <hr />
      <h4>
        Dear, {user.name} from the company: "{user.workPlace}", please fill the
        current quantities for the {user.date}:
      </h4>
      <div style={{ overflowY: "scroll", display: "flex" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Item's Name</th>
              <th>Full Quantity</th>
              <th>Current Quantity</th>
              <th>Missing</th>
            </tr>
          </thead>
          <tbody>
            {equipments.map((equipment) => {
              return (
                <tr key={equipment.name}>
                  <td>{equipments.indexOf(equipment) + 1}</td>
                  <td>{equipment.name}</td>
                  <td>{equipment.fullQuantity}</td>
                  <td>
                    <input
                      type="number"
                      onBlur={(e) => {
                        Dispatch(
                          updateSingleEquipment(equipment.name, e.target.value)
                        );
                      }}
                      defaultValue={equipment.current}
                    />
                  </td>
                  <td>{equipment.missing}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <h2 style={{ textAlign: "left" }}>Add Item:</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Equipment Name:</Form.Label>
          <Form.Control
            defaultValue={equipmentName}
            size="sm"
            type="text"
            onBlur={(e) => setEquipmentName(e.target.value)}
          />
          <Form.Label>Full Quantity:</Form.Label>
          <Form.Control
            defaultValue={fullQuantity}
            size="sm"
            type="number"
            onBlur={(e) => setFullQuantity(e.target.value)}
          />
          <Form.Label>Current Quantity:</Form.Label>
          <Form.Control
            size="sm"
            type="number"
            defaultValue={currentQuantity}
            onBlur={(e) => setCurrentQuantity(e.target.value)}
          />{" "}
          <br />
          <Button
            onClick={(e) => {
              Dispatch(
                addNewEquipment(equipmentName, fullQuantity, currentQuantity)
              );
              setEquipmentName("");
              setFullQuantity(0);
              setCurrentQuantity(0);
            }}
            variant="outline-primary"
          >
            Add Item
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
