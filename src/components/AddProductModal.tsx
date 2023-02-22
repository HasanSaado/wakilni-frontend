// Libraries
import React, { useState, useRef } from 'react';

// Components
import {
  Button,
  Modal,
  Form
} from 'react-bootstrap';

// Hooks
import { useAppDispatch } from 'stores/hooks';

// Actions
import { createProduct } from 'stores/product/ProductActions';

export default function AddProductModal() {

  // Constants
  const dispatch = useAppDispatch();

  // State
  const [show, setShow] = useState(false);
  const [image, setImage] = useState<any>();
  const [imagePreview, setImagePreview] = useState<any>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  // Ref
  const imageRef: any = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onImageClick = () => {
    imageRef.current.click();
  };

  const handleAddProduct = async () => {
    await dispatch(createProduct({
      name: name,
      description: description,
      image: image
    }))
      .then(() => {
        handleClose();
      });
  }

  return (
    <div className="my-2">
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              type="text"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Product Image</Form.Label>
            <i className="fa-solid fa-image ms-3" onClick={() => onImageClick()}></i>
            <input
              type='file'
              id='bannerPic'
              ref={imageRef}
              style={{ display: 'none' }}
              onChange={
                (e: any) => (
                  setImage(e.target.files[0]),
                  setImagePreview(URL.createObjectURL(e.target.files[0]))

                )
              }
            />
          </Form.Group>
          {
            imagePreview &&
            <img className='position-relative w-100' src={imagePreview} />
          }
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
