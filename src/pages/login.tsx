// Libraries
import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useAppDispatch } from 'stores/hooks';
import { useNavigate } from 'react-router-dom';

// Components
import { Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

// Actions
import { loginUser } from 'stores/authUser/AuthUserActions';

export default function LoginPage() {
  // constants
  const dispatch = useAppDispatch();
  const history = useNavigate();

  // State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await dispatch(loginUser({
      username: username,
      password: password
    }))
      .then(async (res: any) => {
        console.log('res: ', res);
        if (res.error) {

          await new Promise(f => setTimeout(f, 1000));
          toast.error(res.error)
          return;
        }
        history('/');
      });
  }

  return (
    <div className="app container login-form d-flex align-items-center">
      <> <Toaster /></>
      <Form
        onSubmit={handleSubmit}
        className="w-sm-100 w-md-50 m-auto"
      >
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
