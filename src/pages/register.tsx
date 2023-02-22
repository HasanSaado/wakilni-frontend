// Libraries
import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';

// Hooks
import { useAppDispatch } from 'stores/hooks';

// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toast, { Toaster } from "react-hot-toast";

// Actions
import { registerUser } from 'stores/authUser/AuthUserActions';

export default function RegisterPage() {

  // const
  const history = useNavigate();
  const dispatch = useAppDispatch();

  // State
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      history('/library');
    }
  }, [])

  const validateForm = async () => {
    return username.length > 0 && password.length > 0;
  }

  const validatePassword = () => {
    if (password === passwordConfirmation) {
      return true;
    }
    return false;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!validatePassword()) {
      await new Promise(f => setTimeout(f, 1000));
      toast.error('Your password does not match!');
      return;
    }

    await dispatch(registerUser({
      username: username,
      password: password
    }))
      .then(async (res: any) => {
        console.log('res: ', res);
        if (res.status === 'error') {

          await new Promise(f => setTimeout(f, 1000));
          toast.error(res.message);
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
            required
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            required
            value={passwordConfirmation}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="danger"
          type="submit"
          disabled={!validateForm()}
        >
          Submit
        </Button>
        <p className="mt-3">Already have an account? <Link to="/">Sign In</Link></p>
      </Form>
    </div>
  );
}
