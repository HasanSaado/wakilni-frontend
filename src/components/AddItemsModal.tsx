// Libraries
import { isEmpty, set } from 'lodash';
import React, { useState, useRef } from 'react';

// Components
import {
  Button,
  Modal,
  Form
} from 'react-bootstrap';

// Hooks
import { useAppDispatch } from 'stores/hooks';
import { addItem } from 'stores/item/ItemActions';

interface Props {
  productId: string;
  refetchItems: () => void;
}

export default function AddItemsModal({ productId, refetchItems }: Props) {

  // Constants
  const dispatch = useAppDispatch();

  // State
  const [show, setShow] = useState(false);
  const [value, setValue] = useState<any>();
  const [inputs, setInputs] = useState<any>([]);
  const [values, setValues] = useState<any>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddProduct = async () => {
    for (let i = 0; i < values.length; i++) {
      if (!isEmpty(values[i])) {
        await dispatch(addItem({
          product_id: productId,
          serial_number: values[i],
        }))
      }
    }
    handleClose();
    refetchItems();
  }

  const handelChangeValue = (index: any, e: any) => {
    var tmp = values;

    tmp[index] = e.target.value;
    setValues(tmp);
  }

  console.log('values: ', values);

  const addInputs = () => {
    setInputs([]);
    setValues(new Array(1 * value))
    for (let i = 0; i < value * 1; i++) {
      setInputs((inputs: any) => [
        ...inputs,
        <Form.Group className="mb-3" controlId="description">
          <Form.Control
            type="text"
            placeholder="Serial Number"
            key={i}
            onChange={(e) => handelChangeValue(i, e)}
          />
        </Form.Group>
      ]);
    }
  }

  return (
    <div className="my-2">
      <Button variant="primary" onClick={handleShow}>
        Add Items
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="number">
            <Form.Label>Number of items</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number of items"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
          <Button variant="danger" onClick={() => addInputs()}>
            Done
          </Button>
          <div className='mt-3'>
            {
              !isEmpty(inputs) &&
              inputs.map((input: any) => (
                input
              ))
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleAddProduct()}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
